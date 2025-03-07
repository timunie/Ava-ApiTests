# ContrastBrushConverter Class


Gets a <a href="T_Avalonia_Media_SolidColorBrush">SolidColorBrush</a>, either black or white, depending on the luminance of the supplied color. A default color supplied in the converter parameter may be returned if alpha is below the set threshold.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_Converters">Avalonia.Controls.Primitives.Converters</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ContrastBrushConverter : IValueConverter
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ContrastBrushConverter
	Implements IValueConverter
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ContrastBrushConverter = 
    class
        interface IValueConverter
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/Converters/ContrastBrushConverter.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ContrastBrushConverter</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a></td></tr>
</table>

This is a highly-specialized converter for the color picker.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_Converters_ContrastBrushConverter__ctor">ContrastBrushConverter()</a></td>
<td>Initializes a new instance of the ContrastBrushConverter class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_Converters_ContrastBrushConverter_AlphaThreshold">AlphaThreshold</a></td>
<td>Gets or sets the alpha channel threshold below which a default color is used instead of black/white.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_Converters_ContrastBrushConverter_Convert">Convert(Object, Type, Object, CultureInfo)</a></td>
<td>Converts a value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_Converters_ContrastBrushConverter_ConvertBack">ConvertBack(Object, Type, Object, CultureInfo)</a></td>
<td>Converts a value.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives_Converters">Avalonia.Controls.Primitives.Converters Namespace</a>  
