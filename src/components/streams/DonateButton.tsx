
import { useState } from 'react';
import { BadgeDollarSign, Heart } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface DonateButtonProps {
  streamerName: string;
  id?: string;
}

export default function DonateButton({ streamerName, id }: DonateButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [amount, setAmount] = useState('5');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleDonate = () => {
    setIsSubmitting(true);
    
    // Simulate donation process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDialogOpen(false);
      
      toast({
        title: "Donation successful!",
        description: `Thank you for supporting ${streamerName} with $${amount}!`,
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <>
      <Button 
        id={id}
        onClick={() => setIsDialogOpen(true)}
        className="bg-amber-500 hover:bg-amber-600"
      >
        <BadgeDollarSign className="mr-2 h-4 w-4" /> 
        Donate
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Support {streamerName}</DialogTitle>
            <DialogDescription>
              Your donation helps support this creator's content. Thank you for your generosity!
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Donation Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                step="1"
                className="col-span-3"
              />
            </div>
            
            <div className="flex justify-between gap-2">
              {[5, 10, 25, 50, 100].map((value) => (
                <Button
                  key={value}
                  variant="outline"
                  size="sm"
                  onClick={() => setAmount(value.toString())}
                  className={amount === value.toString() ? "border-amber-500" : ""}
                >
                  ${value}
                </Button>
              ))}
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleDonate}
              disabled={isSubmitting}
              className="bg-amber-500 hover:bg-amber-600"
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  <Heart className="mr-2 h-4 w-4" />
                  Donate ${amount}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
