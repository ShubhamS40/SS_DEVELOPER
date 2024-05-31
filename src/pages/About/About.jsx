import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import React from 'react';

function About() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-4  xs:gap-6 md:gap-8 p-24 sm:p-5">
                <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border-2 border-pink-600 col-span-5 max-md:col-span-12 !p-0" style={{ transform: 'none' }}>
                    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ssdevloper&theme=transparent&layout=compact&hide_border=true&title_color=FFFFFF" alt="github stats" loading="lazy" />
                </div>
                <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border-2 border-pink-600 col-span-7 max-md:col-span-12 !p-0" style={{ transform: 'none' }}>
                    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=ssdevloper&theme=transparent&hide_border=true&title_color=FFFFFF" alt="github stats" loading="lazy" />
                </div>
                <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border-2 border-pink-600 col-span-full" style={{ transform: 'none' }}>
                    <img className="w-full h-auto" src="https://skillicons.dev/icons?i=html,css,js,tailwind,react,next,flutter,dart,nginx,firebase,appwrite,nodejs,expressjs,c,java,mongo,redux,mysql,threejs,git,github&perline=15" alt="github stats" loading="lazy" />
                </div>
                <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border-2 border-pink-600 col-span-6 !p-0" style={{ transform: 'none' }}>
                    <img className="" src="https://github-readme-streak-stats.herokuapp.com?user=ssdevloper&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="github stats" loading="lazy" />
                </div>
                <div className="p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border-2 border-pink-600 col-span-6 !p-0" style={{ transform: 'none' }}>
                  <p>Hello My Dear Friends That is My Tech Stack</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
