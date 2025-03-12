# ActualThemeVariant Property


Gets the UI theme that is currently used by the element, which might be different than the RequestedThemeVariantProperty.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ThemeVariant ActualThemeVariant { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property ActualThemeVariant As ThemeVariant
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ActualThemeVariant : ThemeVariant with get
override ActualThemeVariant : ThemeVariant with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledElement.cs#L321" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a>  
If current control is contained in the ThemeVariantScope, TopLevel or Application with non-default RequestedThemeVariant, that value will be returned. Otherwise, current OS theme variant is returned.

#### Implements
<a href="P_Avalonia_Styling_IThemeVariantHost_ActualThemeVariant">IThemeVariantHost.ActualThemeVariant</a>  


## See Also


#### Reference
<a href="T_Avalonia_StyledElement">StyledElement Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

