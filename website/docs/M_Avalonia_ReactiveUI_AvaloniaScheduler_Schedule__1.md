# Schedule&lt;TState&gt;(TState, TimeSpan, Func&lt;IScheduler, TState, IDisposable&gt;) Method


Schedules an action to be executed after dueTime.



## Definition
**Namespace:** <a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI</a>  
**Assembly:** Avalonia.ReactiveUI (in Avalonia.ReactiveUI.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override IDisposable Schedule<TState>(
	TState state,
	TimeSpan dueTime,
	Func<IScheduler, TState, IDisposable> action
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function Schedule(Of TState) ( 
	state As TState,
	dueTime As TimeSpan,
	action As Func(Of IScheduler, TState, IDisposable)
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Schedule : 
        state : 'TState * 
        dueTime : TimeSpan * 
        action : Func<IScheduler, 'TState, IDisposable> -> IDisposable 
override Schedule : 
        state : 'TState * 
        dueTime : TimeSpan * 
        action : Func<IScheduler, 'TState, IDisposable> -> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.ReactiveUI/AvaloniaScheduler.cs#L57" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  TState</dt><dd>State passed to the action to be executed.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a></dt><dd>Relative time after which to execute the action.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.ischeduler" target="_blank" rel="noopener noreferrer">IScheduler</a>, TState, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</dt><dd>Action to be executed.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the state passed to the scheduled action.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
The disposable object used to cancel the scheduled action (best effort).

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.ischeduler.schedule" target="_blank" rel="noopener noreferrer">IScheduler.Schedule``1(UMP, TimeSpan, Func(IScheduler, UMP, IDisposable))</a>  


## See Also


#### Reference
<a href="T_Avalonia_ReactiveUI_AvaloniaScheduler">AvaloniaScheduler Class</a>  
<a href="Overload_Avalonia_ReactiveUI_AvaloniaScheduler_Schedule">Schedule Overload</a>  
<a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI Namespace</a>  

