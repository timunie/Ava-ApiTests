# CreatePopupHost Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute("PopupHost is considered an internal API. Use Popup or any Popup-based controls (Flyout, Tooltip) instead.")]
public static IPopupHost CreatePopupHost(
	Visual target,
	IAvaloniaDependencyResolver? dependencyResolver
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute("PopupHost is considered an internal API. Use Popup or any Popup-based controls (Flyout, Tooltip) instead.")>
Public Shared Function CreatePopupHost ( 
	target As Visual,
	dependencyResolver As IAvaloniaDependencyResolver
) As IPopupHost
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute("PopupHost is considered an internal API. Use Popup or any Popup-based controls (Flyout, Tooltip) instead.")>]
static member CreatePopupHost : 
        target : Visual * 
        dependencyResolver : IAvaloniaDependencyResolver -> IPopupHost 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/OverlayPopupHost.cs#L198" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  IAvaloniaDependencyResolver</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Primitives_IPopupHost">IPopupHost</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_OverlayPopupHost">OverlayPopupHost Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

