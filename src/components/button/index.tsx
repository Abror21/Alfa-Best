type Props = { title: string, type: 'button' | 'submit' | undefined }

const Button = ({ type, title }: Props) => {
    return (
        <>
            <button
                className="bg-emerald-400 hover:bg-emerald-500 text-white text-sm ease-in duration-300 rounded-[45px] px-5 py-2 xl:px-6 xl:py-3 lg:text-base"
                type={type}
            >
                {title}
            </button>
        </>
    )
}

export default Button;