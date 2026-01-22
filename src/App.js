import React, { useState } from 'react';
import { Heart, MessageCircle, Users, MapPin, Calendar, ChevronLeft, Send, DollarSign, CheckCircle, Sparkles } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('feed');
  const [selectedConcert, setSelectedConcert] = useState(null);

  const concerts = [
    {
      id: 1,
      artist: 'Billie Eilish',
      venue: 'Madison Square Garden',
      date: 'Feb 14, 2026',
      time: '8:00 PM',
      price: '$120',
      image: 'https://slpecho.com/wp-content/uploads/2024/11/billieeilish-videotroncentre-17.jpg',
      match: 'Your top artist on Spotify',
      socialActivity: {
        type: 'bought',
        friend: { name: 'Alex', avatar: 'https://placehold.co/150x150/3B82F6/white?text=A' }
      },
      interested: [
        { name: 'Sarah', avatar: 'https://placehold.co/150x150/EC4899/white?text=S' },
        { name: 'Mike', avatar: 'https://placehold.co/150x150/10B981/white?text=M' },
        { name: 'Emma', avatar: 'https://placehold.co/150x150/F59E0B/white?text=E' }
      ],
      attending: [
        { name: 'Alex', avatar: 'https://placehold.co/150x150/3B82F6/white?text=A' }
      ]
    },
    {
      id: 2,
      artist: 'The Weeknd',
      venue: 'Barclays Center',
      date: 'Feb 20, 2026',
      time: '7:30 PM',
      price: '$95',
      image: 'https://static01.nyt.com/images/2017/06/08/arts/08WEEKND-REFER/08WEEKND-REFER-superJumbo.jpg?quality=75&auto=webp',
      socialActivity: {
        type: 'interested',
        friend: { name: 'Divya', avatar: 'https://placehold.co/150x150/8B5CF6/white?text=D' }
      },
      interested: [
        { name: 'Jordan', avatar: 'https://placehold.co/150x150/06B6D4/white?text=J' },
        { name: 'Taylor', avatar: 'https://placehold.co/150x150/EF4444/white?text=T' },
        { name: 'Divya', avatar: 'https://placehold.co/150x150/8B5CF6/white?text=D' }
      ],
      attending: []
    },
    {
      id: 3,
      artist: 'Tame Impala',
      venue: 'Forest Hills Stadium',
      date: 'Mar 5, 2026',
      time: '7:00 PM',
      price: '$85',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg/2560px-Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg',
      match: 'Match: 92%',
      socialActivity: {
        type: 'bought',
        friend: { name: 'Sam', avatar: 'https://placehold.co/150x150/14B8A6/white?text=S' }
      },
      interested: [
        { name: 'Casey', avatar: 'https://placehold.co/150x150/A855F7/white?text=C' }
      ],
      attending: [
        { name: 'Sam', avatar: 'https://placehold.co/150x150/14B8A6/white?text=S' },
        { name: 'Riley', avatar: 'https://placehold.co/150x150/F97316/white?text=R' }
      ]
    },
    {
      id: 4,
      artist: 'SZA',
      venue: 'Radio City Music Hall',
      date: 'Mar 12, 2026',
      time: '8:30 PM',
      price: '$110',
      image: 'https://dbknews.s3.amazonaws.com/uploads/2023/03/030123_szaconcert_TM22-scaled.jpg',
      socialActivity: {
        type: 'interested',
        friend: { name: 'Morgan', avatar: 'https://placehold.co/150x150/84CC16/white?text=M' }
      },
      interested: [
        { name: 'Morgan', avatar: 'https://placehold.co/150x150/84CC16/white?text=M' },
        { name: 'Jamie', avatar: 'https://placehold.co/150x150/0EA5E9/white?text=J' },
        { name: 'Drew', avatar: 'https://placehold.co/150x150/F43F5E/white?text=D' }
      ],
      attending: []
    }
  ];

  const myProfile = {
    name: 'You',
    avatar: 'https://placehold.co/150x150/3B82F6/white?text=Y'
  };

  const FeedView = () => (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 backdrop-blur-xl bg-white/80 border-b border-gray-200 px-6 py-4 z-10">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">For You</h1>
      </div>

      <div className="pb-24 px-4 pt-4">
        {concerts.map(concert => (
          <div
            key={concert.id}
            className="bg-white rounded-3xl mb-4 overflow-hidden border border-gray-200 transition-all duration-300 active:scale-98 cursor-pointer shadow-sm"
            onClick={() => {
              setSelectedConcert(concert);
              setCurrentView('detail');
            }}
          >
            {concert.socialActivity && (
              <div className="px-5 pt-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={concert.socialActivity.friend.avatar}
                    alt={concert.socialActivity.friend.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">{concert.socialActivity.friend.name}</span>
                    {concert.socialActivity.type === 'bought' ? ' just bought tickets to ' : ' is interested in '}
                    <span className="font-semibold text-gray-900">{concert.artist}</span>
                  </p>
                </div>
              </div>
            )}

            <div className="relative h-56">
              <img
                src={concert.image}
                alt={concert.artist}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              {concert.match && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    {concert.match}
                  </span>
                </div>
              )}
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-white text-3xl font-bold mb-1 tracking-tight drop-shadow-lg">{concert.artist}</h2>
              </div>
            </div>

            <div className="p-5">
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-700 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="font-medium">{concert.venue}</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{concert.date} · {concert.time}</span>
                </div>
                <div className="text-gray-900 font-semibold text-base">
                  From {concert.price}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {concert.interested.length > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-3">
                      {concert.interested.slice(0, 3).map((friend, idx) => (
                        <img
                          key={idx}
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-7 h-7 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      {concert.interested.length} interested
                    </span>
                  </div>
                )}

                {concert.attending.length > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-3">
                      {concert.attending.slice(0, 3).map((friend, idx) => (
                        <div key={idx} className="relative">
                          <img
                            src={friend.avatar}
                            alt={friend.name}
                            className="w-7 h-7 rounded-full border-2 border-white"
                          />
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 absolute -bottom-0.5 -right-0.5 bg-white rounded-full" />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      {concert.attending.length} going
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 backdrop-blur-2xl bg-white/80 border-t border-gray-200 px-8 py-4 safe-area-bottom">
        <div className="flex justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-blue-600 transition-opacity active:opacity-60">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-medium">Feed</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 transition-opacity active:opacity-60">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Saved</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 transition-opacity active:opacity-60">
            <img src={myProfile.avatar} alt="Profile" className="w-10 h-10 rounded-full border-2 border-gray-200" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );

  const DetailView = () => {
    const [selectedFriends, setSelectedFriends] = useState([]);

    const toggleFriend = (friend) => {
      if (selectedFriends.find(f => f.name === friend.name)) {
        setSelectedFriends(selectedFriends.filter(f => f.name !== friend.name));
      } else {
        setSelectedFriends([...selectedFriends, friend]);
      }
    };

    return (
      <div className="min-h-screen bg-white">
        <div className="sticky top-0 backdrop-blur-xl bg-white/80 border-b border-gray-200 px-4 py-3 z-10">
          <button
            onClick={() => setCurrentView('feed')}
            className="flex items-center text-blue-600 font-medium transition-opacity active:opacity-60"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="text-base">Back</span>
          </button>
        </div>

        <div className="relative h-80">
          <img
            src={selectedConcert.image}
            alt={selectedConcert.artist}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          {selectedConcert.match && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                {selectedConcert.match}
              </span>
            </div>
          )}
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-white text-4xl font-bold mb-1 tracking-tight drop-shadow-lg">{selectedConcert.artist}</h1>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-200">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-semibold">{selectedConcert.venue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">{selectedConcert.date}</p>
                  <p className="text-gray-500 text-sm">{selectedConcert.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
                <p className="text-gray-900 font-semibold">From {selectedConcert.price}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Friends</h3>

            {selectedConcert.interested.length > 0 && (
              <div className="mb-5">
                <p className="text-gray-500 text-sm font-medium mb-3 uppercase tracking-wide">Interested</p>
                <div className="flex flex-wrap gap-2">
                  {selectedConcert.interested.map((friend, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleFriend(friend)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-200 ${
                        selectedFriends.find(f => f.name === friend.name)
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md scale-105'
                          : 'bg-gray-100 text-gray-900 border border-gray-200 active:scale-95'
                      }`}
                    >
                      <img
                        src={friend.avatar}
                        alt={friend.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm font-medium">{friend.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedConcert.attending.length > 0 && (
              <div>
                <p className="text-gray-500 text-sm font-medium mb-3 uppercase tracking-wide">Going</p>
                <div className="flex flex-wrap gap-2">
                  {selectedConcert.attending.map((friend, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleFriend(friend)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-200 ${
                        selectedFriends.find(f => f.name === friend.name)
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md scale-105'
                          : 'bg-gray-100 text-gray-900 border border-gray-200 active:scale-95'
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <CheckCircle className="w-3 h-3 text-green-500 absolute -bottom-0.5 -right-0.5 bg-white rounded-full" />
                      </div>
                      <span className="text-sm font-medium">{friend.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {selectedFriends.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
              <p className="text-gray-900 text-sm font-medium mb-3">
                {selectedFriends.length} friend{selectedFriends.length > 1 ? 's' : ''} selected
              </p>
              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md">
                  <MessageCircle className="w-4 h-4" />
                  Start Chat
                </button>
                <button className="flex-1 bg-white text-blue-600 border border-blue-300 px-4 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform">
                  <Send className="w-4 h-4" />
                  Nudge
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => setCurrentView('payment')}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-base shadow-lg active:scale-98 transition-transform"
          >
            Buy Tickets
          </button>
        </div>
      </div>
    );
  };

  const PaymentView = () => {
    const partyMembers = [
      { name: 'You', avatar: 'https://placehold.co/150x150/3B82F6/white?text=Y', contributed: true, preference: 'Middle' },
      { name: 'Sarah', avatar: 'https://placehold.co/150x150/EC4899/white?text=S', contributed: true, preference: 'Side' },
      { name: 'Mike', avatar: 'https://placehold.co/150x150/10B981/white?text=M', contributed: true, preference: 'Low' }
    ];

    const totalEscrow = partyMembers.length * 100;

    return (
      <div className="min-h-screen bg-white">
        <div className="sticky top-0 backdrop-blur-xl bg-white/80 border-b border-gray-200 px-4 py-3 z-10">
          <button
            onClick={() => setCurrentView('detail')}
            className="flex items-center text-blue-600 font-medium transition-opacity active:opacity-60"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="text-base">Back</span>
          </button>
        </div>

        <div className="px-6 py-6">
          <div className="bg-gray-50 rounded-2xl p-5 mb-5 border border-gray-200">
            <h2 className="text-gray-900 text-xl font-semibold mb-1 tracking-tight">{selectedConcert.artist}</h2>
            <p className="text-gray-500 text-sm mb-3">{selectedConcert.venue}</p>
            <p className="text-gray-500 text-sm">{selectedConcert.date} · {selectedConcert.time}</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 mb-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/90 text-sm font-medium">Escrow Balance</span>
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-white text-5xl font-bold mb-2 tracking-tight">${totalEscrow}</div>
            <div className="text-white/90 text-sm font-medium">
              {partyMembers.length} members × $100 each
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 mb-5 border border-gray-200">
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Party Members</h3>
            <div className="space-y-0 divide-y divide-gray-200">
              {partyMembers.map((member, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-gray-900 font-semibold">{member.name}</p>
                      <p className="text-gray-500 text-sm">Prefers {member.preference}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {member.contributed ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-900 font-semibold">$100</span>
                      </>
                    ) : (
                      <span className="text-gray-400 text-sm">Pending</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 mb-5 border border-gray-200">
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Seat Preferences</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-1">1</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Middle</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-1">1</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Side</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-1">1</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Low</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200 opacity-50">
                <div className="text-3xl font-bold text-gray-400 mb-1">0</div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">High</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
            <p className="text-gray-900 text-sm font-semibold mb-1">Ready to purchase!</p>
            <p className="text-gray-600 text-xs">All party members have contributed. We'll find the best seats matching your preferences.</p>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-base shadow-lg active:scale-98 transition-transform">
            Complete Purchase
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {currentView === 'feed' && <FeedView />}
      {currentView === 'detail' && <DetailView />}
      {currentView === 'payment' && <PaymentView />}
    </div>
  );
};

export default App;
