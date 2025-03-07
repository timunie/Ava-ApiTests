# Cue Structure


Determines the time index for a <a href="T_Avalonia_Animation_KeyFrame">KeyFrame</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[TypeConverterAttribute(typeof(CueTypeConverter))]
public readonly struct Cue : IEquatable<Cue>, 
	IEquatable<double>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<TypeConverterAttribute(GetType(CueTypeConverter))>
Public Structure Cue
	Implements IEquatable(Of Cue), IEquatable(Of Double)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
[<TypeConverterAttribute(typeof(CueTypeConverter))>]
type Cue = 
    struct
        inherit ValueType
        interface IEquatable<Cue>
        interface IEquatable<float>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/Cue.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Cue</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Cue), <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Animation_Cue__ctor">Cue(Double)</a></td>
<td>Sets a new Cue object.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Animation_Cue_CueValue">CueValue</a></td>
<td>The normalized percent value, ranging from 0.0 to 1.0</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Animation_Cue_Equals">Equals(Double)</a></td>
<td>Checks for equality between a Cue and a <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a> value.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_Cue_Parse">Parse(String, CultureInfo)</a></td>
<td>Parses a string to a Cue object.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  
