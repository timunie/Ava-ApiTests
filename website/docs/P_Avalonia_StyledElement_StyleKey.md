# StyleKey Property


Gets the type by which the element is styled.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Type StyleKey { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property StyleKey As Type
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract StyleKey : Type with get
override StyleKey : Type with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledElement.cs#L234" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a>

#### Implements
<a href="P_Avalonia_Styling_IStyleable_StyleKey">IStyleable.StyleKey</a>  


## Remarks
Usually controls are styled by their own type, but there are instances where you want an element to be styled by its base type, e.g. creating SpecialButton that derives from Button and adds extra functionality but is still styled as a regular Button. To change the style for a control class, override the <a href="P_Avalonia_StyledElement_StyleKeyOverride">StyleKeyOverride</a> property

## See Also


#### Reference
<a href="T_Avalonia_StyledElement">StyledElement Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

