export default function footer() {
    return (
        <footer className="bg-(--text) text-(--bg) p-10 lato flex flex-col gap-10 xl:px-20">
            <a href="#" className="text-2xl lato-bold">Sarwar Alam Sujon.</a>
            <div className="flex flex-col justify-between gap-8">
                <ul className="flex flex-col gap-2">
                    <li><a href="">Experience</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">About Me</a></li>
                </ul>
                <ul className="flex flex-col gap-2 underline">
                    <li><a href="https://www.linkedin.com/in/md-sarwar-alam-10a69b33a/">Linkedin</a></li>
                    <li>WhatsApp: +880 1863256391</li>
                    <li>Mail: Sarwaralamsujon@gmail.com</li>
                </ul>
            </div>
        </footer>
    )
};
