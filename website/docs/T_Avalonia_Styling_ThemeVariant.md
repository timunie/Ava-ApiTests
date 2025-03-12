# ThemeVariant Class


Specifies a UI theme variant that should be used for the Control and Application types.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[TypeConverterAttribute(typeof(ThemeVariantTypeConverter))]
public sealed class ThemeVariant : IEquatable<ThemeVariant>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<TypeConverterAttribute(GetType(ThemeVariantTypeConverter))>
Public NotInheritable Class ThemeVariant
	Implements IEquatable(Of ThemeVariant)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
[<TypeConverterAttribute(typeof(ThemeVariantTypeConverter))>]
type ThemeVariant = 
    class
        interface IEquatable<ThemeVariant>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/ThemeVariant.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ThemeVariant</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(ThemeVariant)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Styling_ThemeVariant__ctor">ThemeVariant(Object, ThemeVariant)</a></td>
<td>Creates a new instance of the ThemeVariant</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Styling_ThemeVariant_Dark">Dark</a></td>
<td>Use the Dark theme variant.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_ThemeVariant_Default">Default</a></td>
<td>Inherit theme variant from the parent. If set on Application, system theme is inherited. Using Default as the ResourceDictionary.Key marks this dictionary as a fallback in case the theme variant or resource key is not found in other theme dictionaries.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_ThemeVariant_InheritVariant">InheritVariant</a></td>
<td>Reference to a theme variant which should be used, if resource wasn't found for the requested variant.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_ThemeVariant_Key">Key</a></td>
<td>Key of the theme variant by which variants are compared.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_ThemeVariant_Light">Light</a></td>
<td>Use the Light theme variant.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Styling_ThemeVariant_Equals">Equals(ThemeVariant)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_ThemeVariant_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_ThemeVariant_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Styling_ThemeVariant_op_Explicit">Explicit(PlatformThemeVariant to ThemeVariant)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_ThemeVariant_op_Explicit_1">Explicit(ThemeVariant to Nullable(PlatformThemeVariant))</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

