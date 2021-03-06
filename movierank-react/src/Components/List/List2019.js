import React from 'react';
import './List.css';
import Movie from '../Movie';

function List2019() {
    return (
        <div className="list_longdiv">
            <div className="list_row">
                <Movie
                    rank="1"
                    name="κ·Ήνμ§μ π₯"
                    image="https://movie-phinf.pstatic.net/20190116_206/1547615429111dINWj_JPEG/movie_image.jpg"
                    link="https://youtu.be/xM1CIQd_X4c"
                    release="2019.01.23."
                    audience={16266338}
                    tmeter={82} tscore={80}
                    mscore={0} mreview={0}
                    boxoffice={123622755}
                    award="μ­λ κ΅­μ°μν 2μ / κ΅­λ΄ μ­λ λ§€μΆ 1μ"
                    actor="λ₯μΉλ£‘(κ³ λ°μ₯), μ΄νλ¬(μ₯νμ¬), μ§μ κ·(λ§νμ¬)"
                    story="λΆμ² μ£ΌμΌ λ¬λ¦¬κ³  κ΅¬λ₯΄μ§λ§ μ€μ μ λ°λ₯, κΈκΈ°μΌ ν΄μ²΄ μκΈ°λ₯Ό λ§λ λ§μ½λ°!
                    λ μ΄μ λ¬Όλ¬μ€ κ³³μ΄ μλ νμ λ§ν κ³ λ°μ₯μ κ΅­μ  λ²μ£μ‘°μ§μ κ΅­λ΄ λ§μ½ λ°λ°μ μ ν©μ ν¬μ°©νκ³ 
                    μ₯νμ¬, λ§νμ¬, μνΈ, μ¬νκΉμ§ 4λͺμ νμλ€κ³Ό ν¨κ» μ λ³΅ μμ¬μ λμ λ€.
                    λ§μ½λ°μ 24μκ° κ°μλ₯Ό μν΄ λ²μ£μ‘°μ§μ μμ§νΈ μ μΉν¨μ§μ μΈμν΄ μμ₯ μ°½μμ νκ² λκ³ ,
                    λ»λ°μ μ λλ―Έκ°μ μ§λ λ§νμ¬μ μ¨μ μ¬λ₯μΌλ‘ μΉν¨μ§μ μΌμ½ λ§μ§μΌλ‘ μμλ¬Έμ΄ λκΈ° μμνλ€.
                    μμ¬λ λ·μ , μΉν¨μ₯μ¬λ‘ λμ½ λ° μ μμ΄ λ°λΉ μ§ λ§μ½λ°μκ² μ΄λ λ  μ νΈμ κΈ°νκ° μ°Ύμμ€λλ°β¦"
                />
                <Movie
                    rank="2"
                    name="μ΄λ²€μ Έμ€: μλ κ²μ π₯"
                    image="https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg"
                    link="https://youtu.be/TaCE5sAigGQ"
                    release="2019.04.24."
                    audience={13977602}
                    tmeter={94} tscore={90}
                    mscore={78} mreview={7.8}
                    boxoffice={2797501328}
                    award="2019 μΈκ³ TOP 1 / μ­λ λ°μ€μ€νΌμ€ 2μ"
                    actor="λ‘λ²νΈ λ€μ°λ μ£Όλμ΄(ν λ μ€νν¬/μμ΄μΈλ§¨), ν¬λ¦¬μ€ μλ°μ€(μ€ν°λΈ λ‘μ μ€/μΊ‘ν΄ μλ©λ¦¬μΉ΄)"
                    story="μΈνΌλν° μ μ΄ν μ λ°λ§ μ΄μλ¨μ μ§κ΅¬ λ§μ§λ§ ν¬λ§μ΄ λ μ΄λ²€μ Έμ€
                    λ¨Όμ  λ λ κ·Έλ€μ μν΄ λͺ¨λ  κ²μ κ±Έμλ€! μλν μ΄λ²€μ Έμ€ μ΄λͺμ λ°κΏ μ΅νμ μ μμ΄ νΌμ³μ§λ€!"
                />
            </div>
            <div className="list_row">
                <Movie
                    rank="3"
                    name="κ²¨μΈμκ΅­2 π₯"
                    image="https://movie-phinf.pstatic.net/20191121_221/1574298335357mqgLk_JPEG/movie_image.jpg"
                    link="https://youtu.be/eSEs4B4H-EA"
                    release="2019.11.21."
                    audience={13747792}
                    tmeter={78} tscore={93}
                    mscore={64} mreview={6.9}
                    boxoffice={1450026933}
                    award="μ­λ μ λλ©μ΄μ 1μ / μ­λ λ°μ€μ€νΌμ€ 10μ"
                    actor="ν¬λ¦¬μ€ν΄ λ²¨(μλ λͺ©μλ¦¬), μ΄λλ λ©μ €(μμ¬ λͺ©μλ¦¬)"
                    story="μ΄λ λ  λΆν΄κ° μλ¬Έμ λͺ©μλ¦¬κ° μμ¬λ₯Ό λΆλ₯΄κ³ , ννλ‘μ΄ μλ λΈ μκ΅­μ μννλ€. νΈλ‘€μ λͺ¨λ  κ²μ κ³Όκ±°μμ μμλμμμ μλ €μ£Όλ©° μμ¬μ νμ λΉλ°κ³Ό μ§μ€μ μ°Ύμ λ λμΌνλ€κ³  μ‘°μΈνλ€.
                    μνμ λΉ μ§ μλ λΈ μκ΅­μ κ΅¬ν΄μΌλ§ νλ μμ¬μ μλλ μ¨κ²¨μ§ κ³Όκ±°μ μ§μ€μ μ°Ύμ ν¬λ¦¬μ€ν ν, μ¬λΌν κ·Έλ¦¬κ³  μ€λ²€κ³Ό ν¨κ» μνμ²λ§ν λλΌμ΄ λͺ¨νμ λ λκ² λλ€.
                    μμ μ νμ λλ €μνλ μμ¬λ μ΄μ  μ΄ λͺ¨νμ ν€μ³λκ°κΈ°μ μμ μ νμ΄ μΆ©λΆνλ€κ³  λ―Ώμ΄μΌλ§ νλλ°β¦"
                />
                <Movie
                    rank="4"
                    name="μλΌλ"
                    image="https://movie-phinf.pstatic.net/20190524_104/1558663170174Q2mmw_JPEG/movie_image.jpg"
                    link="https://youtu.be/KrM3vS5sy2w"
                    release="2019.05.23."
                    audience={12723777}
                    tmeter={57} tscore={94}
                    mscore={53} mreview={6.7}
                    boxoffice={1050693953}
                    award="μ­λ λ?€μ§μ»¬ λ°μ€μ€νΌμ€ 3μ"
                    actor="λ©λ λ§μλ(μλΌλ), μ μ€λ―Έμ€(μ§λ), λμ€λ―Έ μ€μ½§(μμ€λ―Ό)"
                    story="λ¨Έλλ¨Ό μ¬λ§ μ μ λΉμ μκ·ΈλΌλ° μκ΅­μ μλ. μ’λλ βμλΌλβμ λ§λ²μ¬ βμνβμ μλ’°λ‘ λ§λ² λ¨νλ₯Ό μ°Ύμ λμ°λ€κ°
                    μ£ΌμΈμκ² μΈ κ°μ§ μμμ λ€μ΄μ£Όλ μ§λλ₯Ό λ§λκ² λκ³ , μμ€λ―Ό κ³΅μ£Όμ λ§μμ μ»μΌλ €λ€ μκ°λ λͺ»νλ λͺ¨νμ νλ§λ¦¬κ² λλλ°β¦"
                />
            </div>
            <div className="list_row">
                <Movie
                    rank="5"
                    name="κΈ°μμΆ©"
                    image="https://movie-phinf.pstatic.net/20190528_36/1559024198386YVTEw_JPEG/movie_image.jpg"
                    link="https://youtu.be/jBdRhhSt3Bc"
                    release="2019.05.30."
                    audience={10313163}
                    tmeter={98} tscore={90}
                    mscore={96} mreview={8.9}
                    boxoffice={263020130}
                    award="19μΉΈ ν©κΈμ’λ €μ / 20μμΉ΄λ°λ―Έ 4κ΄μ"
                    actor="μ‘κ°νΈ(κΈ°ν), μ΄μ κ· (λμ΅), μ‘°μ¬μ (μ°κ΅)"
                    story="μ μλ°±μλ‘ μ΄ κΈΈ λ§λ§νμ§λ§ μ¬μ΄λ μ’μ κΈ°ν(μ‘κ°νΈ) κ°μ‘±. μ₯λ¨ κΈ°μ°(μ΅μ°μ)μκ² λͺλ¬Έλμ μΉκ΅¬κ° μ°κ²°μμΌ μ€ κ³ μ‘ κ³ΌμΈ μλ¦¬λ
                    λͺ¨μ²λΌ μΉνΌ κ³ μ μμμ ν¬λ§μ΄λ€. μ¨ κ°μ‘±μ λμκ³Ό κΈ°λ μμ λ°μ¬μ₯(μ΄μ κ· ) μ§μΌλ‘ ν₯νλ κΈ°μ°.
                    κΈλ‘λ² ITκΈ°μ CEOμΈ λ°μ¬μ₯μ μ νμ λμ°©νμ μ κ³  μλ¦λ€μ΄ μ¬λͺ¨λ μ°κ΅(μ‘°μ¬μ )κ° κΈ°μ°λ₯Ό λ§μ΄νλ€.
                    κ·Έλ¬λ μ΄λ κ² μμλ λ κ°μ‘±μ λ§λ¨ λ€λ‘, κ±·μ‘μ μ μλ μ¬κ±΄μ΄ κΈ°λ€λ¦¬κ³  μμμΌλβ¦"
                />
                <Movie
                    rank="6"
                    name="μμνΈ"
                    image="https://movie-phinf.pstatic.net/20190724_161/1563931152464tk11A_JPEG/movie_image.jpg"
                    link="https://youtu.be/li4jOV5j7SI"
                    release="2019.07.31."
                    audience={9426421}
                    tmeter={83} tscore={94}
                    mscore={0} mreview={7.5}
                    boxoffice={69501772}
                    award="19μ²­λ£‘μνμ κ°λμ/20λ°±μμμ λμ κ°λ³Έμ"
                    actor="μ‘°μ μ(μ©λ¨), μ€μ(μμ£Ό)"
                    story="λνκ΅ μ°μ λμλ¦¬ μμ΄μ€ μΆμ μ΄μ§λ§ μ‘Έμ ν λͺ λμ§Έ μ·¨μ μ€ν¨λ‘ λμΉ«λ°₯λ§ λ¨Ήλ μ©λ¨μ
                    μ¨ κ°μ‘±μ΄ μ°Έμν μ΄λ¨Έλμ μΉ μ μμΉμμ μ°νμ₯ μ§μμΌλ‘ μ·¨μν λμλ¦¬ νλ°° μμ£Όλ₯Ό λ§λλ€
                    μ΄μν μ¬νλ μ μ, μΉ μ μμΉκ° λ¬΄λ₯΄μ΅λ μ€ μλ¬Έμ μ°κΈ°κ° λΉλ©μμ νΌμ΄ μ€λ₯΄λ©°
                    νΌν  μλ μμ΄ μμκ°μ λμ¬ μ μ²΄λ μ λκ°μ€λ‘ λ€λ?μ¬ μΌλνΌλμ ν©μΈμ΄κ² λλ€.
                    μ©λ¨κ³Ό μμ£Όλ μ°μ λμλ¦¬ μμ  μμ λλ λͺ¨λ  μ²΄λ ₯κ³Ό μ€ν¬μ λμν΄
                    νμΆμ ν₯ν κΈ°μ§λ₯Ό λ°ννκΈ° μμνλλ°β¦"
                />
            </div>
            <div className="list_row">
                <Movie
                    rank="7"
                    name="λ°±λμ°"
                    image="https://movie-phinf.pstatic.net/20191219_263/15767415637757HPgg_JPEG/movie_image.jpg"
                    link="https://youtu.be/FKAbTcss1ow"
                    release="2019.12.19."
                    audience={8252909}
                    tmeter={71} tscore={74}
                    mscore={0} mreview={0}
                    boxoffice={61255955}
                    award="20λμ’μ 2κ΄μ / 21μ²­λ£‘μνμ κΈ°μ μ"
                    actor="μ΄λ³ν(λ¦¬μ€ν), νμ μ°(μ‘°μΈμ°½), λ§λμ(κ°λ΄λ)"
                    story="λνλ―Όκ΅­ κ΄μΈ‘ μ­μ¬μ μ΅λ κ·λͺ¨μ λ°±λμ° ν­λ° λ°μ. κ°μμ€λ¬μ΄ μ¬λμ νλ°λλ μμκ°μ μλΉκ·νμ΄ λκ³ , λ¨κ³Ό λΆ λͺ¨λλ₯Ό μ§μ΄μΌν¬ μΆκ° ν­λ°μ΄ μμΈ‘λλ€.
                    μ¬μ μ΄μ μ μ¬λμ λ§κΈ° μν΄ βμ μ κ²½β(μ νμ§)μ λ°±λμ° ν­λ°μ μ°κ΅¬ν΄ μ¨ μ§μ§ν κ΅μ βκ°λ΄λβ(λ§λμ)μ μ΄λ‘ μ λ°λ₯Έ μμ μ κ³ννκ³ ,
                    μ μ­μ μλ νΉμ μ¬ EOD λμ βμ‘°μΈμ°½β(νμ μ°)μ΄ λ¨κ³Ό λΆμ μ΄λͺμ΄ κ±Έλ¦° λΉλ° μμ μ ν¬μλλ€. μμ μ ν€λ₯Ό μ₯ λΆν λ¬΄λ ₯λΆ μμ μΌκΈ μμ βλ¦¬μ€νβ(μ΄λ³ν)κ³Ό μ μ μ μ±κ³΅ν βμΈμ°½β.
                    νμ§λ§ βμ€νβμ μμ μ μ μλ νλμΌλ‘ βμΈμ°½βμ κ³€λνκ² λ§λ λ€. ννΈ, βμΈμ°½βμ΄ λΆνμμ νΌμ³μ§λ μμ μ ν¬μλ μ¬μ€λ λͺ¨λ₯Έ μ±
                    μμΈμ νλ‘ λ¨μ βμ΅μ§μβ(λ°°μμ§)μ μ¬λμ λ§μ μ΄μλ¨κΈ° μν΄ κ³ κ΅°λΆν¬νκ³  κ·Έ μ¬μ΄, λ°±λμ° λ§μ§λ§ ν­λ°κΉμ§μ μκ°μ μ μ  κ°κΉμ κ°λλ°β¦!"
                />
                <Movie
                    rank="8"
                    name="μ€νμ΄λλ§¨: ν νλ‘¬ ν"
                    image="https://movie-phinf.pstatic.net/20190527_181/1558933159657a210P_JPEG/movie_image.jpg"
                    link="https://youtu.be/VUFmhKpZKlE"
                    release="2019.07.02."
                    audience={8023606}
                    tmeter={90} tscore={95}
                    mscore={69} mreview={7.4}
                    boxoffice={1131927996}
                    award="19MCU 10μ΅λ¬λ¬ νΈλ¦¬νν¬λΌμ΄"
                    actor="ν° νλλ(νΌν° νμ»€/μ€νμ΄λλ§¨ ), μ¬λ¬΄μ L. μ­μ¨(λ ν¨λ¦¬), μ  λ°μ΄μ μ½λ¨Ό(MJ)"
                    story="βμλκ²μβ μ΄ν λ³νλ μΈμ, μ€νμ΄λλ§¨ βνΌν° νμ»€βλ νκ΅ μΉκ΅¬λ€κ³Ό μ λ½ μ¬νμ λ λκ² λλ€.
                    κ·Έλ° κ·Έμ μμ βλ ν¨λ¦¬βκ° λ±μ₯ν΄ λμμ μμ²­νκ³  μ μ²΄λΆλͺμ μ‘°λ ₯μ βλ―Έμ€νλ¦¬μ€βκΉμ§ ν©λ₯νκ² λλ©΄μ
                    μ  μΈκ³λ₯Ό μννλ μλ‘μ΄ λΉλ° βμλ¦¬λ©ν ν¬λ¦¬μ³μ€βμ λ§μμΌλ§ νλ μν©μ λμ΄κ² λλλ°β¦"
                />
            </div>
            <div className="list_row">
                <Movie
                    rank="9"
                    name="μΊ‘ν΄ λ§λΈ"
                    image="https://movie-phinf.pstatic.net/20190225_72/1551069530582h2huX_JPEG/movie_image.jpg"
                    link="https://youtu.be/n1Xz13zlWWw"
                    release="2019.03.06."
                    audience={5802810}
                    tmeter={79} tscore={46}
                    mscore={64} mreview={3.5}
                    boxoffice={1128462972}
                    award="μ­λ μ€νλ λ°μ€μ€νΌμ€ 8μ"
                    actor="λΈλ¦¬ λΌμ¨(μΊλ΄ λλ²μ€/μΊ‘ν΄ λ§λΈ), μ¬λ¬΄μ L. μ­μ¨(λ ν¨λ¦¬), λ²€ λ©λΈμ¨(νλ‘μ€/μΌλ¬)"
                    story="1995λ, κ³΅κ΅° νμΌλΏ μμ μ κΈ°μ΅μ μκ³  ν¬λ¦¬μ‘± μ μ¬λ‘ μ΄μκ°λ μΊλ΄ λλ²μ€(λΈλ¦¬ λΌμ¨)κ° μ§κ΅¬μ λΆμμ°©νλ€.
                    μ΄λ μμ λ ν¨λ¦¬(μ¬λ¬΄μ L. μ­μ¨)μκ² λ°κ²¬λμ΄ νμ μ΄λ£¬ κ·Έλ€μ μ§κ΅¬λ‘ ν₯νλ λ ν° μνμ κ°μ§νκ³ 
                    νμ ν©μ³ μ μμ λλ΄μΌ νλλ°β¦"
                />
                <Movie
                    rank="10"
                    name="μ‘°μ»€"
                    image="https://movie-phinf.pstatic.net/20190906_128/1567761736426S6Fje_JPEG/movie_image.jpg"
                    link="https://youtu.be/x60mB0zXZ38"
                    release="2019.10.02."
                    audience={5255308}
                    tmeter={68} tscore={88}
                    mscore={59} mreview={9.0}
                    boxoffice={1074419384}
                    award="20μμΉ΄λ°λ―Έ λ¨μ°μ£Όμ°μ - νΈμν¨ νΌλμ€"
                    actor="νΈμν¨ νΌλμ€(μμ νλ /μ‘°μ»€)"
                    story="κ³ λ΄μμ κ΄λ μμ νλ μ μ½λ―ΈλμΈμ κΏκΎΈλ λ¨μ. νμ§λ§ λͺ¨λκ° λ―Έμ³κ°λ μ½λ―Έλ κ°μ μΈμμμ
                    λ§¨ μ μ μΌλ‘λ κ·Έκ° μ€ μλ¦¬κ° μμμ κΉ¨λ«κ² λλλ°β¦ μ΄μ κ» λ³Έ μ  μλ μ§μ§ βμ‘°μ»€βλ₯Ό λ§λλΌ!"
                />
            </div>
        </div>
    );
}
export default List2019;