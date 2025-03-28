# DispatcherUnhandledExceptionEventHandler Delegate


Represents the method that will handle the <a href="E_Avalonia_Threading_Dispatcher_UnhandledException">UnhandledException</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public delegate void DispatcherUnhandledExceptionEventHandler(
	Object sender,
	DispatcherUnhandledExceptionEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Delegate Sub DispatcherUnhandledExceptionEventHandler ( 
	sender As Object,
	e As DispatcherUnhandledExceptionEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type DispatcherUnhandledExceptionEventHandler = 
    delegate of 
        sender : Object * 
        e : DispatcherUnhandledExceptionEventArgs -> unit
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherUnhandledExceptionEventArgs">DispatcherUnhandledExceptionEventArgs</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

