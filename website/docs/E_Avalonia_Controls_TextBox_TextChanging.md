# TextChanging Event


Occurs synchronously when text starts to change but before it is rendered.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<TextChangingEventArgs> TextChanging
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event TextChanging As EventHandler(Of TextChangingEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TextChanging : IEvent<EventHandler<TextChangingEventArgs>,
    TextChangingEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TextBox.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_TextChangingEventArgs">TextChangingEventArgs</a>)

## Remarks
This event occurs just after the <a href="P_Avalonia_Controls_TextBox_Text">Text</a> property value has been updated.

## See Also


#### Reference
<a href="T_Avalonia_Controls_TextBox">TextBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

