# StringFormatMultiValueConverter Class


A multi-value converter which calls <a href="https://learn.microsoft.com/dotnet/api/system.string.format#system-string-format(system-string-system-object)" target="_blank" rel="noopener noreferrer">Format(String, Object)</a>



## Definition
**Namespace:** <a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class StringFormatMultiValueConverter : IMultiValueConverter
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class StringFormatMultiValueConverter
	Implements IMultiValueConverter
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type StringFormatMultiValueConverter = 
    class
        interface IMultiValueConverter
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Converters/StringFormatMultiValueConverter.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  StringFormatMultiValueConverter</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Data_Converters_IMultiValueConverter">IMultiValueConverter</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_Converters_StringFormatMultiValueConverter__ctor">StringFormatMultiValueConverter(String, IMultiValueConverter)</a></td>
<td>Initializes a new instance of the StringFormatMultiValueConverter class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_Converters_StringFormatMultiValueConverter_Format">Format</a></td>
<td>Gets the format string.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Converters_StringFormatMultiValueConverter_Inner">Inner</a></td>
<td>Gets an inner value converter which will be called before the string format takes place.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Converters_StringFormatMultiValueConverter_Convert">Convert(IList(Object), Type, Object, CultureInfo)</a></td>
<td>Converts multi-binding inputs to a final value.</td>
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
