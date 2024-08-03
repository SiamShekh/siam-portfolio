interface props {
    title: string
}
const Features_item = ({ title }: props) => {
    return (
        <div>
            <div className="flex items-center gap-3">
                <div className="size-2 bg-blue-700"></div>
                <p className="text-white capitalize">{title}</p>
            </div>
        </div>
    );
};

export default Features_item;