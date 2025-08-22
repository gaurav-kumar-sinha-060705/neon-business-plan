import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
      };
    }
  }
}

const VoiceAssistant = () => {
  useEffect(() => {
    // Load ElevenLabs script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      console.log('ElevenLabs ConvAI script loaded successfully');
    };
    
    script.onerror = (error) => {
      console.error('Failed to load ElevenLabs ConvAI script:', error);
    };
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <elevenlabs-convai agent-id="agent_7201k38m3xzfea1v3vytxpaa8y7t" />
    </div>
  );
};

export default VoiceAssistant;