
const benefits = [
  {
    number: "01",
    title: "Z-Score එක ඉහළ නංවා ගැනීමේ අවස්ථාව",
    description:
      "නිවැරදි අධ්‍යයන සැලැස්මක්, විෂය කරුණු පිළිබඳ පැහැදිලි අවබෝධයක් සහ විභාග පුහුණුවක් සමඟ ICT විෂයෙන් ඉහළ ලකුණු ලබාගැනීමට උත්සාහ කරන්න. එය ඔබගේ සමස්ත A/L ප්‍රතිඵලයට සහ Z-Score එකට දායක විය හැකිය.",
    icon: "↗",
  },
  {
    number: "02",
    title: "විශ්වවිද්‍යාල ප්‍රවේශයට නව මංපෙත්",
    description:
      "ICT විෂය හරහා තොරතුරු තාක්ෂණය සහ පරිගණක විද්‍යාව ආශ්‍රිත උසස් අධ්‍යාපන මාර්ග පිළිබඳ දැනුමක් ලබාගත හැකිය. ඔබගේ විෂය සංයෝජනය සහ සුදුසුකම් අනුව අදාළ උපාධි පාඨමාලා සඳහා ඇති අවස්ථා හඳුනාගන්න.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "අනාගතයට ගැළපෙන රැකියා අවස්ථා",
    description:
      "Software Engineering, Networking, Cybersecurity, Data Analysis සහ Cloud Computing වැනි තාක්ෂණික ක්ෂේත්‍රවල අනාගත රැකියා මාර්ග පිළිබඳ අවබෝධයක් ලබාගැනීමට ICT විෂය ඔබට පදනමක් සපයයි.",
    icon: "⌘",
  },
  {
    number: "04",
    title: "තාක්ෂණික ලෝකය තේරුම් ගැනීම",
    description:
      "පරිගණක පද්ධති, දත්ත සමුදා, ජාලකරණය, ක්‍රමලේඛනය සහ නවීන තාක්ෂණ පිළිබඳ මූලික දැනුම ලබාගනිමින් ඩිජිටල් ලෝකය තුළ විශ්වාසයෙන් ඉදිරියට යන්න.",
    icon: "◎",
  },
  {
    number: "05",
    title: "තාර්කික චින්තනය හා ගැටලු විසඳීම",
    description:
      "ICT විෂය හරහා ගැටලුවක් විශ්ලේෂණය කිරීම, තාර්කිකව සිතීම සහ පියවරෙන් පියවර විසඳුම් සකස් කිරීම වැනි කුසලතා වර්ධනය කරගත හැකිය. මේවා අධ්‍යාපනයටත් අනාගත වෘත්තීය ජීවිතයටත් ප්‍රයෝජනවත් වේ.",
    icon: "✳",
  },
  {
    number: "06",
    title: "දේශීය හා ජාත්‍යන්තර අවස්ථා",
    description:
      "අදාළ උසස් අධ්‍යාපන සුදුසුකම් සහ අමතර තාක්ෂණික කුසලතා සමඟ දේශීය හා විදේශීය තාක්ෂණික ක්ෂේත්‍රවල රැකියා සහ වෘත්තීය සංවර්ධන අවස්ථා සඳහා සූදානම් විය හැකිය.",
    icon: "◎",
  },
  {
    number: "07",
    title: "ස්වයං රැකියා හා ව්‍යවසායකත්වය",
    description:
      "වෙබ් අඩවි නිර්මාණය, තාක්ෂණික සේවා සහ ඩිජිටල් ව්‍යාපාර වැනි ක්ෂේත්‍ර ගැන ඉගෙනගෙන අනාගතයේ තමන්ගේම ව්‍යාපාරයක් ගොඩනැගීමට අවශ්‍ය පදනම සකස් කරගන්න.",
    icon: "◇",
  },
  {
    number: "08",
    title: "පාසලෙන් ඔබ්බට යන ඩිජිටල් කුසලතා",
    description:
      "තොරතුරු සොයාගැනීම, දත්ත සමඟ වැඩ කිරීම, තාක්ෂණය වගකීමෙන් භාවිත කිරීම සහ නව දේ ඉගෙනගැනීම වැනි කුසලතා වර්ධනය කරගෙන අනාගත අභියෝගවලට සූදානම් වන්න.",
    icon: "✦",
  },
];

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="relative overflow-hidden bg-[#171116] px-5 py-16 text-white sm:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-800/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-rose-300">
            WHY CHOOSE A/L ICT?
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            A/L ICT තෝරාගන්නේ ඇයි?
            <span className="mt-3 block bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent">
              ඔබේ අනාගතයට නව මඟක්!
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A/L ICT යනු විෂයක් පමණක් නොවේ. නිවැරදි අධ්‍යයන
            සැලැස්මක් සමඟ ඔබේ ප්‍රතිඵල වැඩිදියුණු කරගැනීමටත්,
            උසස් අධ්‍යාපන හා අනාගත වෘත්තීය අවස්ථා හඳුනාගැනීමටත්
            උපකාරී වන වැදගත් පියවරකි.
          </p>

          <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-red-700 to-rose-300" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-rose-400/50 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-red-950/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rose-300/20 bg-red-500/10 text-2xl text-rose-300 transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>

                <span className="text-3xl font-black text-white/10 transition-colors group-hover:text-rose-300/30">
                  {benefit.number}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-bold leading-8 text-white transition-colors group-hover:text-rose-300">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {benefit.description}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-rose-400/60 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-rose-300/20 bg-gradient-to-r from-red-950 via-[#641b2c] to-[#341522] p-7 text-center sm:p-10">
          <p className="text-xs font-bold tracking-[0.2em] text-rose-300">
            YOUR FUTURE • YOUR CHOICE
          </p>

          <h3 className="mt-4 text-2xl font-black leading-relaxed sm:text-3xl">
            අද නිවැරදි තීරණයක් ගන්න.
            <span className="block text-rose-300">
              හෙට දවසේ අවස්ථා වෙනුවෙන් සූදානම් වන්න.
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300">
            කැපවීම, නිවැරදි මඟපෙන්වීම සහ අඛණ්ඩ පුහුණුව සමඟ
            ඔබේ අධ්‍යාපනික ඉලක්ක කරා පියනගන්න.
          </p>
        </div>
      </div>
    </section>
  );
}
