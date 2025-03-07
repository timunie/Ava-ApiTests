# OnCompleted Method




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void OnCompleted(
	Action continuation
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub OnCompleted ( 
	continuation As Action
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnCompleted : 
        continuation : Action -> unit 
override OnCompleted : 
        continuation : Action -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherPriorityAwaitable.cs#L21" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd></dl>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.runtime.compilerservices.inotifycompletion.oncompleted" target="_blank" rel="noopener noreferrer">INotifyCompletion.OnCompleted(Action)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherPriorityAwaitable">DispatcherPriorityAwaitable Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
