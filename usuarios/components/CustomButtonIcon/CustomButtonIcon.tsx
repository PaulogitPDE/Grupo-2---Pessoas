interface CustomButtonIconProps{
    link: string;
    alt: string;
}

export const CustomButtonIcon = (props: CustomButtonIconProps) => {
    return(
        <img src={props.link} className="img-fluid" style={{ maxWidth: "350px", padding: "30px", backgroundColor: "orange"}} alt={props.alt} />
    );
}