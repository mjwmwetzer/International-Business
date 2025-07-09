export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Marko Wetzer
          </h1>
          
          <p className="text-xl text-blue-700 font-medium mb-6">
            Informatie over Marko Wetzer
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                ℹ️
              </span>
              Over Marko Wetzer
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Informatie niet beschikbaar
                </h3>
                <p className="text-gray-600 mb-3">
                  Ik heb momenteel geen specifieke informatie over Marko Wetzer in mijn kennisbank. 
                </p>
                <p className="text-gray-600 mb-3">
                  Om accurate informatie te krijgen over Marko Wetzer, zou je kunnen:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Zoeken op LinkedIn of andere professionele netwerken</li>
                  <li>Kijken op bedrijfswebsites waar hij mogelijk werkt</li>
                  <li>Zoeken in nieuwsartikelen of publicaties</li>
                  <li>Contact opnemen via officiële kanalen</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Meer informatie nodig?
                </h3>
                <p className="text-gray-600">
                  Als je specifieke informatie hebt over Marko Wetzer die je wilt delen of als je weet in welke context je naar hem zoekt (bijvoorbeeld zijn beroep, bedrijf, of vakgebied), kan ik je helpen met het structureren van die informatie.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Voor actuele en accurate informatie, raadpleeg altijd officiële bronnen
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}