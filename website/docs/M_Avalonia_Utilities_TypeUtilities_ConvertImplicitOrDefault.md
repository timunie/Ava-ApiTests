# ConvertImplicitOrDefault Method


Convert a value to a type using the implicit conversions allowed by the C# language or return the default for the type if the value could not be converted.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Object? ConvertImplicitOrDefault(
	Object? value,
	Type type
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ConvertImplicitOrDefault ( 
	value As Object,
	type As Type
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ConvertImplicitOrDefault : 
        value : Object * 
        type : Type -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/TypeUtilities.cs#L333" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value to convert.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type to convert to.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
A value of *type*.

## See Also


#### Reference
<a href="T_Avalonia_Utilities_TypeUtilities">TypeUtilities Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
