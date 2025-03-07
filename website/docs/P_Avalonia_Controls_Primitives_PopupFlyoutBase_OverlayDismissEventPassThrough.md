# OverlayDismissEventPassThrough Property


Gets or sets a value indicating whether the event that closes the flyout is passed through to the parent window.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool OverlayDismissEventPassThrough \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property OverlayDismissEventPassThrough As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member OverlayDismissEventPassThrough : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Flyouts/PopupFlyoutBase.cs#L147" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>Clicks outside the popup cause the popup to close. When OverlayDismissEventPassThrough is set to false, these clicks will be handled by the popup and not be registered by the parent window. When set to true, the events will be passed through to the parent window.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
