# TypeUtilities Class


Provides utilities for working with types at runtime.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class TypeUtilities
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class TypeUtilities
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type TypeUtilities = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/TypeUtilities.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TypeUtilities</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Utilities_TypeUtilities_AcceptsNull">AcceptsNull(Type)</a></td>
<td>Returns a value indicating whether null can be assigned to the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_TypeUtilities_AcceptsNull__1">AcceptsNull(T)()</a></td>
<td>Returns a value indicating whether null can be assigned to the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_TypeUtilities_CanCast__1">CanCast(T)(Object)</a></td>
<td>Returns a value indicating whether value can be casted to the specified type. If value is null, checks if instances of that type can be null.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_TypeUtilities_ConvertImplicit__1">ConvertImplicit(T)(Object)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_TypeUtilities_ConvertImplicitOrDefault">ConvertImplicitOrDefault(Object, Type)</a></td>
<td>Convert a value to a type using the implicit conversions allowed by the C# language or return the default for the type if the value could not be converted.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_TypeUtilities_ConvertOrDefault">ConvertOrDefault(Object, Type, CultureInfo)</a></td>
<td>Convert a value to a type by any means possible, returning the default for that type if the value could not be converted.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_TypeUtilities_Default">Default(Type)</a></td>
<td>Gets the default value for the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_TypeUtilities_IsNumeric">IsNumeric(Type)</a></td>
<td>Determines if a type is numeric. Nullable numeric types are considered numeric.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_TypeUtilities_TryConvert">TryConvert(Type, Object, CultureInfo, Object)</a></td>
<td>Try to convert a value to a type by any means possible.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_TypeUtilities_TryConvertImplicit">TryConvertImplicit(Type, Object, Object)</a></td>
<td>Try to convert a value to a type using the implicit conversions allowed by the C# language.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
