# ActualThemeVariant Property


Gets the UI theme that is currently used by the element, which might be different than the RequestedThemeVariantProperty.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ThemeVariant ActualThemeVariant \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property ActualThemeVariant As ThemeVariant
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ActualThemeVariant : ThemeVariant with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/IThemeVariantHost.cs" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a>  
If current control is contained in the ThemeVariantScope, TopLevel or Application with non-default RequestedThemeVariant, that value will be returned. Otherwise, current OS theme variant is returned.

## See Also


#### Reference
<a href="T_Avalonia_Styling_IThemeVariantHost">IThemeVariantHost Interface</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  
