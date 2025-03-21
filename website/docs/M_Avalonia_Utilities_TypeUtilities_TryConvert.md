# TryConvert Method


Try to convert a value to a type by any means possible.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool TryConvert(
	Type to,
	Object? value,
	CultureInfo? culture,
	out Object?? result
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function TryConvert ( 
	to As Type,
	value As Object,
	culture As CultureInfo,
	<OutAttribute> ByRef result As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member TryConvert : 
        to : Type * 
        value : Object * 
        culture : CultureInfo * 
        result : Object byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/TypeUtilities.cs#L132" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type to convert to.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value to convert.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The culture to use.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>If successful, contains the convert value.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the cast was successful, otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Utilities_TypeUtilities">TypeUtilities Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

