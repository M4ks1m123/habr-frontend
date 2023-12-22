'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { post } from "@/constants";
import { useSession } from "next-auth/react";

export default function page({ params: { id } }) {
    /*const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('http://dummyjson.com/products/1')
            .then((res) => res.json())
            .then((post_data) => {
                setPost(post_data)
            });
    }, []);
*/

    const [post, setPost] = useState(null);


    const { data: session } = useSession();
    //console.log("!!!!", session?.user.token);
    //console.log("Bearer " + session?.user.token);


    const fetchUser = async () => {
        const res = await fetch("http://localhost:8080/api/articles/" + id, {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + session?.user.token,
                "Content-Type": "application/json",
            },
        });

        const response = await res.json();
        console.log(response);
        setPost(response);
    }

    useEffect(() => { fetchUser() }, [])

    var test = '<div id="post-content-body"><div><div class="article-formatted-body article-formatted-body article-formatted-body_version-2"><div xmlns="http://www.w3.org/1999/xhtml"><p><em>Привет, Хабр!</em></p><p><em>Недавно команде разработки </em><a href="https://cloud.beeline.ru/?utm_source=owned_media&amp;utm_medium=habr&amp;utm_campaign=beeline_cloud&amp;utm_term=kandidatura_starshiy_injener_programmist_v_doljnosti_otkazat"><em><u>beeline cloud</u></em></a><em> попалась вот такая статья. И оказалась она довольно дискуссионной. Настолько, что мы решили ее перевести и узнать мнение широкой аудитории — а кто же, по вашему мнению, достоин называться синьором?</em></p><p>Похвально, когда ради карьерного роста специалисты отваживаются пройти собеседования на инженерные должности. Достойно уважения и то, что они понимают сложность предстоящих им испытаний, сопряженных порой со стрессовыми ситуациями.</p><p>Уже несколько лет я провожу собеседования с инженерами для различных компаний. В последнее время, как никогда ранее, угрожающе выросло количество кандидатов, которым приходится отказывать в должности. Ничего не изменилось в методах тестирования — вопросы те же самые. Проблема в людях — они не имеют представления о том, что значит быть старшим инженером. И это при огромном спросе на подобных специалистов.</p><p>Десятилетний опыт в программировании на деле ничего не значит. Не время определяет статус senior’а.</p><p>Постараюсь описать, что для меня значит быть старшим инженером в области разработки программного обеспечения.</p><figure class="full-width "><img src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/c8c/d9d/bca/c8cd9dbca63f923268ff4a79def65e9b.png" alt="Unsplash, Nangialai Stoman" title="Unsplash, Nangialai Stoman" width="1200" height="1600" data-src="https://habrastorage.org/getpro/habr/upload_files/c8c/d9d/bca/c8cd9dbca63f923268ff4a79def65e9b.png"><div><figcaption><em>Unsplash, Nangialai Stoman</em></figcaption></div></figure><h2>Так кто же ты такой, старший инженер?</h2><p>ChatGPT (чат-бот с искусственным интеллектом) выдал следующую формулировку:</p><blockquote><p><em>Старшие инженеры обладают глубоким пониманием языков программирования, принципов проектирования программного обеспечения и методологий разработки.</em></p><p><em>— изрёк чат-бот и тут же обесценил наше маленькое исследование</em></p></blockquote><p>Рассмотрим пример классического собеседования.</p><h3>Методологии разработки</h3><p>Организационные методы, направленные на повышение эффективности работы команды специалистов, называются методологиями разработки. Они могут быть довольно нудными, но, тем не менее, вы должны уметь разбираться в них.</p><p>Годы работы привили мне неприятие методологий, лишённых гибкости. Более того — я считаю, что даже Scrum недостаточно гибок. Его чрезмерное использование в конечном итоге тешит самолюбие менеджеров проектов в большей степени, чем программистов.</p><figure class="full-width "><img src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/bd7/ba7/736/bd7ba7736da5f449f1448edfd012bd3e.png" width="634" height="500" data-src="https://habrastorage.org/getpro/habr/upload_files/bd7/ba7/736/bd7ba7736da5f449f1448edfd012bd3e.png"></figure><p>В собеседованиях с разработчиками я ищу в них способность к критике. Недостаточно знать Scrum, важно также понимать его недостатки и уметь найти методы их устранения.</p><p>Знание разработчиком других методологий, кроме Scrum и Kanban (таких, как, например, RUP) говорит в его пользу. Оно свидетельствует о готовности учиться за пределами своей области.</p><h3>Принципы проектирования программного обеспечения</h3><p>Есть правила, которым профессиональные программисты следуют каждый день. Когда-то вы о них читали, затем благополучно забыли, но на уровне подсознания они всегда с вами.</p><blockquote><p><em>Востребованность инженера уровня «рокзвезда» гораздо выше, чем у его коллег. Дело не только в программировании. Высококлассный инженер обладает невероятной креативностью и способностью видеть концептуальные закономерности, недоступные другим.</em></p><p><em>— Рид Хастингс, cоучредитель компании Netflix</em></p></blockquote><p>Готов поклясться, я мог бы сделать клише и в отзывах кандидатам после окончания каждого собеседования впечатывать один и тот же ответ:</p><p><em>Рекомендую вам более внимательно ознакомиться с паттернами проектирования Python. В частности, советую обратить внимание на </em><a href="https://python-patterns.guide/"><em><u>это руководство</u></em></a><em>.</em></p><p>Кандидатов можно отфильтровывать в том числе и по паттернам проектирования, которых они придерживаются или просто знают. В очень редких случаях я получал ответы абсолютно на все свои вопросы.</p><figure class="full-width "><img src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/c84/daf/ecc/c84dafecc3670cb25947360e1219cf41.png" alt="Этот мем хорошо иллюстрирует реакцию большинства разработчиков на вопрос о паттернах проектирования" title="Этот мем хорошо иллюстрирует реакцию большинства разработчиков на вопрос о паттернах проектирования" width="552" height="414" data-src="https://habrastorage.org/getpro/habr/upload_files/c84/daf/ecc/c84dafecc3670cb25947360e1219cf41.png"><div><figcaption><em>Этот мем хорошо иллюстрирует реакцию большинства разработчиков на вопрос о паттернах проектирования</em></figcaption></div></figure><p>Освоив паттерны проектирования, можно столкнуться со сложностью их применения на практике. Лично мне доводилось попадать в ситуации, когда при написании кода не удаётся их сразу вспомнить. Умение заставить себя при программировании каждый раз выполнять самопроверку, продвинет вас на шаг вперёд.</p><h3>Языки программирования</h3><p>Почему в Python принято использовать len(array), а в других языках – array.length()? Есть ли в этом какая-то логика?</p><p>А хорошо ли вы знаете этот язык и то, как он работает «под капотом»?</p><p>Литература по изучаемому языку программирования абсолютно необходима каждому, кто хочет приобрести фундаментальные знания. Лишь опираясь на полученную таким образом информацию, вы будете готовы к непременным каверзным вопросам собеседования.</p><h2>Плохое впечатление губит многие собеседования</h2><blockquote><p><em>Ребята, нельзя ли побыстрее с ответом? У меня так-то есть предложения и от других компаний.</em></p><p><em>— Слова кандидата на собеседовании, когда ему предложили задать вопросы о предстоящей должности.</em></p></blockquote><p>Предлагая огромные зарплаты, компании ищут незаурядных людей. Поэтому умение произвести хорошее впечатление на интервьюера сыграет вам на руку.</p><p>Оценивается не только уровень подготовки кандидата, но и его отношение к делу. Недавно, например, компания попросила нас искать в большей степени «хороших и честных» людей, нежели великих программистов.</p><p>Тщеславный человек оказывает негативное воздействие на коллектив. Рядом с ним слишком тяжело работать. И в долгосрочной перспективе ущерб, нанесённый им компании, может обойтись очень дорого.</p><p>Дурные манеры или заведомая ложь могут привести к немедленному исключению из конкурсного отбора.</p><p>«Как завоевывать друзей и оказывать влияние на людей» — одна из книг, которую должен прочитать каждый. Она поможет понять, как правильно устанавливать взаимоотношения в коллективе.</p><p>Опытные инженеры должны уметь руководить командой. Нужны высокие коммуникативные способности, чтобы занять эту должность. Не забывайте об этом.</p><h2>Что нужно знать младшему/среднему звену, чтобы подняться на ступень вверх?</h2><p>Несколько замечательных ресурсов помогут вам в этом:</p><ul><li><p><a href="https://github.com/kamranahmedse/developer-roadmap"><u>Community Driven Roadmaps</u></a></p></li><li><p><a href="https://github.com/sdmg15/Best-websites-a-programmer-should-visit"><u>Лучшие веб-сайты, которые должен посетить программист</u></a>.</p></li><li><p><a href="https://www.talkberry.ai/mock-interview"><u>Искусственный Интеллект для имитации собеседования</u></a> или <a href="https://www.taskade.com/generate/personas/professional-career-counselor-persona"><u>создание собственного карьерного пути</u></a>.</p></li></ul><h2>А как же навыки работы с кодом?</h2><p>Несколько месяцев назад я купил <a href="https://leetcode.com/"><u>LeetCode</u></a> Premium. Интересные математические курьезы, паттерны и оптимизации от других пользователей очень помогли мне. Благодаря этой подписке я сумел получить мою нынешнюю работу.</p><p>Имитация собеседования в крупной компании также не повредит. Она позволит получить представление о том, что ожидает вас в реальности.</p><blockquote><p><em>Стремясь к звездам, вы, возможно, достигнете неба.<br>— Рейнгольд Нибур</em></p></blockquote><figure class=""><img src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/7ce/04e/482/7ce04e4824a97113d6ece2cd2c570148.png" alt="Список вопросов для крупных компаний от Leetcode" title="Список вопросов для крупных компаний от Leetcode" width="252" height="382" data-src="https://habrastorage.org/getpro/habr/upload_files/7ce/04e/482/7ce04e4824a97113d6ece2cd2c570148.png"><div><figcaption><em>Список вопросов для крупных компаний от Leetcode</em></figcaption></div></figure><p>Есть и другие сайты, подобные LeetCode, например, AlgoExpert и CodeSignal.</p><h2>Суровая правда</h2><p>Даже прочитав множество материалов, практикуясь каждый день и имея большой опыт, вы можете получить отказ, потому что не соответствуете профилю компании.</p><p>Несколько дней назад я слушал подкаст, где рассказывалось об эксперименте, в ходе которого детей заставляли решать задачи, а затем разделили на две группы:</p><ul><li><p>первую группу похвалили за сообразительность;</p></li><li><p>вторая группа заслужила поощрение за упорство в поисках решений.</p></li></ul><p>Когда им предложили более трудные задачи, дети, которых хвалили за упорство, справлялись с ними. В то время как дети, считавшиеся сообразительными, в конечном итоге отставали в их решении.</p><p>Как видите, главными вашими чертами должны стать упорство и настойчивость. Именно этих навыков все ожидают от старшего инженера. И они же обеспечат вам работу в будущем.</p><h2>Что еще почитать инженер-программисту?</h2><ul><li><p><a href="https://vaiti.io/jmix-lyubov-s-pervogo-vzglyada-esli-ty-java-programmist/"><strong>Jmix — любовь с первого взгляда, если ты Java-программист</strong></a></p></li></ul><p>Автор объясняет, почему его компании нужен только Jmix: подробно об инструментах и интерфейсе</p><ul><li><p><a href="https://vaiti.io/pokazyvayu-po-shagam-kak-nasha-kompaniya-primenyaet-quality-assurance-na-vseh-etapah-raboty-nad-produktom/"><strong>Показываю по шагам, как наша компания применяет Quality Assurance на всех этапах работы над продуктом</strong></a></p></li></ul><p>История о том, как обеспечить качество продуктов и фиксировать опыт работы.</p><ul><li><p><a href="https://vaiti.io/kak-peresobrat-slozhnuyu-razrabotku-v-oblachnoe-reshenie-i-nachat-rabotu-s-malym-i-srednim-biznesom/"><strong>Как пересобрать сложную разработку в облачное решение и начать работу с малым и средним бизнесом</strong></a></p></li></ul><p>Практический кейс о том, как<a href="https://vaiti.io/kak-peresobrat-slozhnuyu-razrabotku-v-oblachnoe-reshenie-i-nachat-rabotu-s-malym-i-srednim-biznesom/"> </a>переделать кастомный логистический продукт в облачное SaaS-решение и привлечь сотни клиентов.</p><blockquote><p><a href="https://cloud.beeline.ru/?utm_source=owned_media&amp;utm_medium=habr&amp;utm_campaign=beeline_cloud&amp;utm_term=kandidatura_starshiy_injener_programmist_v_doljnosti_otkazat"><strong>beeline cloud</strong></a><strong> </strong>— secure cloud provider. Разрабатываем облачные решения, чтобы вы предоставляли клиентам лучшие сервисы.</p></blockquote><p></p></div></div></div> <div class="v-portal" style="display: none;"></div> <div class="v-portal" style="display: none;"></div></div>'
    function createMarkup() {
        return { __html: post?.body };
    }

    return (
        <div>
            <arcticle>
                <div className="border-2 border-slate-300 rounded-lg shadow-md p-3 mt-3">
                    <ul className="space-y-2">
                        <div className="flex items-end space-x-1">
                            <li>
                                <Image src="/assets/profile.svg" width={50} height={50}></Image>
                            </li>
                            <div>
                                <li>{post?.author}</li>
                                <li>{post?.pubDatetime}</li>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="flex space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>
                                <p>{post?.rating}</p>
                            </div>
                            <div className="flex space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p>{post?.views}</p>
                            </div>
                        </div>
                        <div>{/*post?.body*/}</div>
                        <div className="flex space-x-1">
                            {/*post?.badges.map((badge) => (
                                <li className="px-1 border rounded-lg border-slate-400">{badge}</li>))*/}
                            <li className="px-1 border rounded-lg border-slate-400">{post?.hubId}</li>
                        </div>
                        <li className="text-center">
                            <h1 className='text-2xl sm:text-3xl my-4 mx-4'>{post?.articleName}</h1>
                        </li>
                        <div className='log'>
                        </div>
                        <div dangerouslySetInnerHTML={createMarkup()}></div>
                    </ul>
                </div>
            </arcticle>

        </div>
    )
}