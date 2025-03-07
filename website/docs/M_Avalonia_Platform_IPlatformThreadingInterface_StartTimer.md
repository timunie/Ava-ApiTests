# StartTimer Method


Starts a timer.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IDisposable StartTimer(
	DispatcherPriority priority,
	TimeSpan interval,
	Action tick
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function StartTimer ( 
	priority As DispatcherPriority,
	interval As TimeSpan,
	tick As Action
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract StartTimer : 
        priority : DispatcherPriority * 
        interval : TimeSpan * 
        tick : Action -> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformThreadingInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd /><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a></dt><dd>The interval.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>The action to call on each tick.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
An <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a> used to stop the timer.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformThreadingInterface">IPlatformThreadingInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
