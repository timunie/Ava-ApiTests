# TakesFocusFromNativeControl Property


Gets or sets a value indicating whether the popup, on show, transfers focus from any focused native control to Avalonia. The default is `true`.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TakesFocusFromNativeControl { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property TakesFocusFromNativeControl As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TakesFocusFromNativeControl : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/Popup.cs#L386" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>This property only applies to advanced native control embedding scenarios. By default, if a popup is shown when a native control is focused, focus is transferred back to Avalonia in order for the popup to receive input. If this property is set to `false`, then the shown popup will not receive input until it receives an interaction which explicitly focuses the popup, such as a mouse click.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_Popup">Popup Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

