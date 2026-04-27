import express from 'express';

const router = express.Router();

// Mock events data (replace with database in production)
const events = [
  {
    id: 1,
    title: 'Annual Science Fair',
    date: '2026-05-15',
    time: '9:00 AM - 4:00 PM',
    location: 'Main Auditorium',
    description: 'Students showcase innovative science projects and compete for scholarships.',
    image: '[images.unsplash.com](https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800)',
    category: 'Academic'
  },
  {
    id: 2,
    title: 'Spring Concert',
    date: '2026-05-22',
    time: '7:00 PM',
    location: 'Performing Arts Center',
    description: 'Join us for an evening of musical performances by our talented students.',
    image: '[images.unsplash.com](https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800)',
    category: 'Arts'
  },
  {
    id: 3,
    title: 'Sports Day Championship',
    date: '2026-06-05',
    time: '8:00 AM - 5:00 PM',
    location: 'Athletic Complex',
    description: 'Annual inter-house sports competition featuring track and field events.',
    image: '[images.unsplash.com](https://images.unsplash.com/photo-1461896836934-) voices?w=800',
    category: 'Sports'
  },
  {
    id: 4,
    title: 'Parent-Teacher Conference',
    date: '2026-06-12',
    time: '2:00 PM - 6:00 PM',
    location: 'Individual Classrooms',
    description: 'Meet with teachers to discuss your child\'s academic progress.',
    image: '[images.unsplash.com](https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800)',
    category: 'Meeting'
  }
];

router.get('/', (req, res) => {
  const { category, upcoming } = req.query;
  
  let filteredEvents = [...events];
  
  if (category) {
    filteredEvents = filteredEvents.filter(e => 
      e.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  if (upcoming === 'true') {
    const today = new Date();
    filteredEvents = filteredEvents.filter(e => new Date(e.date) >= today);
  }
  
  res.json({ success: true, data: filteredEvents });
});

router.get('/:id', (req, res) => {
  const event = events.find(e => e.id === parseInt(req.params.id));
  
  if (!event) {
    return res.status(404).json({ success: false, error: 'Event not found' });
  }
  
  res.json({ success: true, data: event });
});

export default router;
