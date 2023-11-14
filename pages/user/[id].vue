<template>
    <div class="flex px-5 lg:px-40 mt-0 lg:mt-20">
        <div class="w-full">
            <div class="flex justify-between sticky top-14 backdrop-blur py-5 px-2">
                <div class="flex flex-col justify-between">
                    <h1 class=" whitespace-nowrap font-thin text-6xl text-[#466cb5]">{{ curUser.name }}</h1>
                    <div class=" font-extrabold">{{ curUser.post }}</div>
                    <div v-show="curUser.email">
                        <a :href="`mailto:${curUser.email}`" >{{ curUser.email }}</a>
                    </div>
                </div>
                <img class="invisible md:visible w-40 object-contain" :src="curUser.avatar" />
            </div>
            <div class=" leading-10  mt-20 lg:mt-5">
                <p class=" first-letter:text-7xl first-letter:italic font-extralight">
                    {{ curUser.name }}
                    , KBE (English: William Henry Gates III, October 28, 1955), commonly known as
                    Bill
                    Gates, is a well-known American entrepreneur, investor, software engineer, philanthropist. Together with
                    Paul Allen, he founded Microsoft. He was the chairman, CEO and chief software designer of Microsoft. He
                    owns
                    more than 8% of the company's common stock and is the company's largest individual shareholder.

                    Bill Gates was the richest billionaire in the world for 13 consecutive years in Forbes Global
                    Billionaires
                    List from 1995 to 2007. He left Microsoft on June 27, 2008 and donated $58 billion in personal property
                    to
                    the Bill and Melinda Gates Foundation. Forbes magazine ranked the richest Americans in 2014, with Bill
                    Gates
                    reaching the top with $81.2 billion in assets.

                    Gates resigned as CEO of Microsoft in January 2000. He still served as chairman and created a new
                    position
                    for himself as Chief Software Architect. In June 2006, Gates announced that he would change his
                    full-time
                    job to a part-time job at Microsoft, and that he was gradually shifting his responsibilities. He
                    resigned as
                    chairman of Microsoft in February 2014 and remains a technical advisor to assist newly appointed CEO
                    Satia
                    Nadella.

                    In November 2017, he was elected a foreign academician of the Chinese Academy of Engineering.
                    William Henry Gates III, KBE (English: William Henry Gates III, October 28, 1955), commonly known as
                    Bill
                    Gates, is a well-known American entrepreneur, investor, software engineer, philanthropist. Together with
                    Paul Allen, he founded Microsoft. He was the chairman, CEO and chief software designer of Microsoft. He
                    owns
                    more than 8% of the company's common stock and is the company's largest individual shareholder.

                    Bill Gates was the richest billionaire in the world for 13 consecutive years in Forbes Global
                    Billionaires
                    List from 1995 to 2007. He left Microsoft on June 27, 2008 and donated $58 billion in personal property
                    to
                    the Bill and Melinda Gates Foundation. Forbes magazine ranked the richest Americans in 2014, with Bill
                    Gates
                    reaching the top with $81.2 billion in assets.

                    Gates resigned as CEO of Microsoft in January 2000. He still served as chairman and created a new
                    position
                    for himself as Chief Software Architect. In June 2006, Gates announced that he would change his
                    full-time
                    job to a part-time job at Microsoft, and that he was gradually shifting his responsibilities. He
                    resigned as
                    chairman of Microsoft in February 2014 and remains a technical advisor to assist newly appointed CEO
                    Satia
                    Nadella.

                    In November 2017, he was elected a foreign academician of the Chinese Academy of Engineering.

                    William Henry Gates III, KBE (English: William Henry Gates III, October 28, 1955), commonly known as
                    Bill
                    Gates, is a well-known American entrepreneur, investor, software engineer, philanthropist. Together with
                    Paul Allen, he founded Microsoft. He was the chairman, CEO and chief software designer of Microsoft. He
                    owns
                    more than 8% of the company's common stock and is the company's largest individual shareholder.

                    Bill Gates was the richest billionaire in the world for 13 consecutive years in Forbes Global
                    Billionaires
                    List from 1995 to 2007. He left Microsoft on June 27, 2008 and donated $58 billion in personal property
                    to
                    the Bill and Melinda Gates Foundation. Forbes magazine ranked the richest Americans in 2014, with Bill
                    Gates
                    reaching the top with $81.2 billion in assets.

                    Gates resigned as CEO of Microsoft in January 2000. He still served as chairman and created a new
                    position
                    for himself as Chief Software Architect. In June 2006, Gates announced that he would change his
                    full-time
                    job to a part-time job at Microsoft, and that he was gradually shifting his responsibilities. He
                    resigned as
                    chairman of Microsoft in February 2014 and remains a technical advisor to assist newly appointed CEO
                    Satia
                    Nadella.

                    In November 2017, he was elected a foreign academician of the Chinese Academy of Engineering.

                    William Henry Gates III, KBE (English: William Henry Gates III, October 28, 1955), commonly known as
                    Bill
                    Gates, is a well-known American entrepreneur, investor, software engineer, philanthropist. Together with
                    Paul Allen, he founded Microsoft. He was the chairman, CEO and chief software designer of Microsoft. He
                    owns
                    more than 8% of the company's common stock and is the company's largest individual shareholder.

                    Bill Gates was the richest billionaire in the world for 13 consecutive years in Forbes Global
                    Billionaires
                    List from 1995 to 2007. He left Microsoft on June 27, 2008 and donated $58 billion in personal property
                    to
                    the Bill and Melinda Gates Foundation. Forbes magazine ranked the richest Americans in 2014, with Bill
                    Gates
                    reaching the top with $81.2 billion in assets.

                    Gates resigned as CEO of Microsoft in January 2000. He still served as chairman and created a new
                    position
                    for himself as Chief Software Architect. In June 2006, Gates announced that he would change his
                    full-time
                    job to a part-time job at Microsoft, and that he was gradually shifting his responsibilities. He
                    resigned as
                    chairman of Microsoft in February 2014 and remains a technical advisor to assist newly appointed CEO
                    Satia
                    Nadella.

                    In November 2017, he was elected a foreign academician of the Chinese Academy of Engineering.
                </p>

            </div>
        </div>
    </div>
</template>

<script setup>
import projectScientistList from '~/assets/data/projectScientistList.json'
import ResrarchScientistList from '~/assets/data/researchScientistList.json'
const router = useRouter()
const user = router.currentRoute.value.params
const userList = [...projectScientistList, ...ResrarchScientistList]
const curUser = userList.find(item => item.id == user.id)

</script>