# GetBaseValue&lt;T&gt; Method


Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Optional<T> GetBaseValue<T>(
	StyledProperty<T> property
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetBaseValue(Of T) ( 
	property As StyledProperty(Of T)
) As Optional(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetBaseValue : 
        property : StyledProperty<'T> -> Optional<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L265" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(T)</dt><dd>The property.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Data_Optional_1">Optional</a>(T)Gets the value of the property excluding animated values, otherwise <a href="P_Avalonia_Data_Optional_1_Empty">Empty</a>. Note that this method does not return property values that come from inherited or default values.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

