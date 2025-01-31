import { ShinyButton } from "@/components/ui/shiny-button";


interface HookButtonProps {
    title: string;
}

const HookButton = ({ title }: HookButtonProps) => {

    return (
        <div>
            <ShinyButton>{title}</ShinyButton>
        </div>
    );
};

export default HookButton;
