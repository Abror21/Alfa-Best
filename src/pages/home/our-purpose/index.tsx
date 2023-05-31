import { useState, useEffect } from 'react';
import DefaultText from "../../../components/default-text";
import DefaultTitle from "../../../components/default-title";
import PurposeItem from "./purpose-item";

const OurPurpose = () => {

    const [aimList, setAimList] = useState<[]>([]);
    const [aimTitle, setAimTitle] = useState<{ id: number; title_ru: string; text_ru: string }>({ id: 0, title_ru: '', text_ru: '' });

    useEffect(() => {
        fetch('https://alfabest.napaautomotive.uz/api/aim_category', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": "ru"
            }
        })
            .then(res => res.json())
            .then(data => setAimList(data.datas))
        fetch('https://alfabest.napaautomotive.uz/api/aim', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": "ru"
            }
        })
            .then(res => res.json())
            .then(data => setAimTitle(data.datas[0]))
    }, [])
    let count: number = 0;
    return (
        <div className="container mx-auto px-[15px] lg:gap-14 grid grid-cols-1 lg:grid-cols-5 mt-10 md:mt-[60px]">
            <div className="col-span-2">
                <DefaultTitle title={aimTitle.title_ru} />
                <DefaultText text={aimTitle.text_ru} />
            </div>
            <div className="col-span-3 pt-5">
                {
                    aimList.map(aim => {
                        count += 1
                        return <PurposeItem
                            key={aim['id']}
                            num={`${count < 10 ? '0' + count : count}`}
                            text={aim['text_ru']}
                            img={`https://alfabest.napaautomotive.uz/storage/${aim['image']}`}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default OurPurpose;