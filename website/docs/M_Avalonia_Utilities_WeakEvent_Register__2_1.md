# Register&lt;TSender, TEventArgs&gt;(Func&lt;TSender, EventHandler&lt;TEventArgs&gt;, Action&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static WeakEvent<TSender, TEventArgs> Register<TSender, TEventArgs>(
	Func<TSender, EventHandler<TEventArgs>, Action> subscribe
)
where TSender : class
where TEventArgs : EventArgs

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Register(Of TSender As Class, TEventArgs As EventArgs) ( 
	subscribe As Func(Of TSender, EventHandler(Of TEventArgs), Action)
) As WeakEvent(Of TSender, TEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Register : 
        subscribe : Func<'TSender, EventHandler<'TEventArgs>, Action> -> WeakEvent<'TSender, 'TEventArgs>  when 'TSender : not struct when 'TEventArgs : EventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/WeakEvent.cs#L131" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(TSender, <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(TEventArgs), <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Utilities_WeakEvent_2">WeakEvent</a>(TSender, TEventArgs)

## See Also


#### Reference
<a href="T_Avalonia_Utilities_WeakEvent">WeakEvent Class</a>  
<a href="Overload_Avalonia_Utilities_WeakEvent_Register">Register Overload</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

