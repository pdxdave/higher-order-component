## HOC

This is a simple example of how a higher-order-component may be used.  The ```withCounter``` is the HOC containing a constructor and increment counter used by both the ```ClickCounter``` and the ```HoverCounter```.       


```ClickCounter``` and ```HoverCounter``` import ```withCounter```.  ```withCounter``` then wraps those components along with the specific counter increment and passes them into ```withCounter```.  ```withCounter``` then contains a new class, passes the props from the constructor into the ```WrappedComponent``` which go back to ```ClickCounter``` and ```HoverCounter```.