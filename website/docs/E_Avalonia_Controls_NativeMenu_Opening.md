# Opening Event


Raised before the menu is opened.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<EventArgs> Opening
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Opening As EventHandler(Of EventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Opening : IEvent<EventHandler<EventArgs>,
    EventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/NativeMenu.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>)

## Remarks
Do not update the menu in this event; use <a href="E_Avalonia_Controls_NativeMenu_NeedsUpdate">NeedsUpdate</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_NativeMenu">NativeMenu Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

