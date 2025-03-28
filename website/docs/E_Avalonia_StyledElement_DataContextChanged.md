# DataContextChanged Event


Occurs when the <a href="P_Avalonia_StyledElement_DataContext">DataContext</a> property changes.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler DataContextChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event DataContextChanged As EventHandler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DataContextChanged : IEvent<EventHandler,
    EventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledElement.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler" target="_blank" rel="noopener noreferrer">EventHandler</a>

## Remarks
This event will be raised when the <a href="P_Avalonia_StyledElement_DataContext">DataContext</a> property has changed and all subscribers to that change have been notified.

## See Also


#### Reference
<a href="T_Avalonia_StyledElement">StyledElement Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

