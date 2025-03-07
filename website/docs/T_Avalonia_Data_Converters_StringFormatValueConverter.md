# StringFormatValueConverter Class


A value converter which calls <a href="https://learn.microsoft.com/dotnet/api/system.string.format#system-string-format(system-string-system-object)" target="_blank" rel="noopener noreferrer">Format(String, Object)</a>



## Definition
**Namespace:** <a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class StringFormatValueConverter : IValueConverter
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class StringFormatValueConverter
	Implements IValueConverter
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type StringFormatValueConverter = 
    class
        interface IValueConverter
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Converters/StringFormatValueConverter.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  StringFormatValueConverter</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_Converters_StringFormatValueConverter__ctor">StringFormatValueConverter(String, IValueConverter)</a></td>
<td>Initializes a new instance of the StringFormatValueConverter class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_Converters_StringFormatValueConverter_Format">Format</a></td>
<td>Gets the format string.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Converters_StringFormatValueConverter_Inner">Inner</a></td>
<td>Gets an inner value converter which will be called before the string format takes place.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Converters_StringFormatValueConverter_Convert">Convert(Object, Type, Object, CultureInfo)</a></td>
<td>Converts a value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Converters_StringFormatValueConverter_ConvertBack">ConvertBack(Object, Type, Object, CultureInfo)</a></td>
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
<a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters Namespace</a>  
