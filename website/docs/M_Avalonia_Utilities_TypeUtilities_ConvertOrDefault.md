# ConvertOrDefault Method


Convert a value to a type by any means possible, returning the default for that type if the value could not be converted.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Object? ConvertOrDefault(
	Object? value,
	Type type,
	CultureInfo culture
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ConvertOrDefault ( 
	value As Object,
	type As Type,
	culture As CultureInfo
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ConvertOrDefault : 
        value : Object * 
        type : Type * 
        culture : CultureInfo -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/TypeUtilities.cs#L320" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value to convert.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type to convert to.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The culture to use.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
A value of *type*.

## See Also


#### Reference
<a href="T_Avalonia_Utilities_TypeUtilities">TypeUtilities Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
