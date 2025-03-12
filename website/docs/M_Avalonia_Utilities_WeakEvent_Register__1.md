# Register&lt;TSender&gt;(Action&lt;TSender, EventHandler&gt;, Action&lt;TSender, EventHandler&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static WeakEvent<TSender, EventArgs> Register<TSender>(
	Action<TSender, EventHandler> subscribe,
	Action<TSender, EventHandler> unsubscribe
)
where TSender : class

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Register(Of TSender As Class) ( 
	subscribe As Action(Of TSender, EventHandler),
	unsubscribe As Action(Of TSender, EventHandler)
) As WeakEvent(Of TSender, EventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Register : 
        subscribe : Action<'TSender, EventHandler> * 
        unsubscribe : Action<'TSender, EventHandler> -> WeakEvent<'TSender, EventArgs>  when 'TSender : not struct
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/WeakEvent.cs#L138" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TSender, <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler" target="_blank" rel="noopener noreferrer">EventHandler</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TSender, <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler" target="_blank" rel="noopener noreferrer">EventHandler</a>)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Utilities_WeakEvent_2">WeakEvent</a>(TSender, <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Utilities_WeakEvent">WeakEvent Class</a>  
<a href="Overload_Avalonia_Utilities_WeakEvent_Register">Register Overload</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

