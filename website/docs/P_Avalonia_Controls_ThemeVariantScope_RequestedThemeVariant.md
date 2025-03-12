# RequestedThemeVariant Property


Gets or sets the UI theme variant that is used by the control (and its child elements) for resource determination. The UI theme you specify with ThemeVariant can override the app-level ThemeVariant.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ThemeVariant? RequestedThemeVariant { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property RequestedThemeVariant As ThemeVariant
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RequestedThemeVariant : ThemeVariant with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ThemeVariantScope.cs#L27" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a>Setting RequestedThemeVariant to <a href="P_Avalonia_Styling_ThemeVariant_Default">Default</a> will apply parent's actual theme variant on the current scope.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ThemeVariantScope">ThemeVariantScope Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

