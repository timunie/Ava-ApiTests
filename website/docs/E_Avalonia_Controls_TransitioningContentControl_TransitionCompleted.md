import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TransitionCompleted Event


Raised when the old content isn't needed anymore by the control, because the transition has completed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<TransitionCompletedEventArgs> TransitionCompleted
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event TransitionCompleted As EventHandler(Of TransitionCompletedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TransitionCompleted : IEvent<EventHandler<TransitionCompletedEventArgs>,
    TransitionCompletedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_TransitionCompletedEventArgs">TransitionCompletedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_TransitioningContentControl">TransitioningContentControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
