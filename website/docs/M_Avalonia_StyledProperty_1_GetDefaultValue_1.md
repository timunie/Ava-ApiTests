# GetDefaultValue(Type) Method


Gets the default value for the property on the specified type.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TValue GetDefaultValue(
	Type type
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetDefaultValue ( 
	type As Type
) As TValue
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetDefaultValue : 
        type : Type -> 'TValue 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledProperty.cs#L98" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type.</dd></dl>

#### Return Value
<a href="T_Avalonia_StyledProperty_1">TValue</a>  
The default value.For performance, prefer the <a href="M_Avalonia_StyledProperty_1_GetDefaultValue">GetDefaultValue(AvaloniaObject)</a> overload when possible.

## See Also


#### Reference
<a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue) Class</a>  
<a href="Overload_Avalonia_StyledProperty_1_GetDefaultValue">GetDefaultValue Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

