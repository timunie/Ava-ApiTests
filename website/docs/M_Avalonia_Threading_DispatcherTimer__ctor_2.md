# DispatcherTimer(TimeSpan, DispatcherPriority, EventHandler) Constructor


Creates a timer that uses the UI thread's Dispatcher2 to process the timer event at the specified priority after the specified timeout.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DispatcherTimer(
	TimeSpan interval,
	DispatcherPriority priority,
	EventHandler callback
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	interval As TimeSpan,
	priority As DispatcherPriority,
	callback As EventHandler
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        interval : TimeSpan * 
        priority : DispatcherPriority * 
        callback : EventHandler -> DispatcherTimer
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherTimer.cs#L61" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a></dt><dd>The interval to tick the timer after.</dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd>The priority to process the timer at.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler" target="_blank" rel="noopener noreferrer">EventHandler</a></dt><dd>The callback to call when the timer ticks.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherTimer">DispatcherTimer Class</a>  
<a href="Overload_Avalonia_Threading_DispatcherTimer__ctor">DispatcherTimer Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

