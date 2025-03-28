# Invoke(Action) Method


Executes the specified Action synchronously on the thread that the Dispatcher was created on.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Invoke(
	Action callback
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Invoke ( 
	callback As Action
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Invoke : 
        callback : Action -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.Invoke.cs#L22" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>An Action delegate to invoke through the dispatcher.</dd></dl>

## Remarks
Note that the default priority is DispatcherPriority.Send.

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_Invoke">Invoke Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

