# Styles Property


Gets the styles for the styled element.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Styles Styles { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Styles As Styles
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Styles : Styles with get
override Styles : Styles with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledElement.cs#L222" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Styling_Styles">Styles</a>

#### Implements
<a href="P_Avalonia_Styling_IStyleHost_Styles">IStyleHost.Styles</a>  


## Remarks
Styles for the entire application are added to the Application.Styles collection, but each styled element may in addition define its own styles which are applied to the styled element itself and its children.

## See Also


#### Reference
<a href="T_Avalonia_StyledElement">StyledElement Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

