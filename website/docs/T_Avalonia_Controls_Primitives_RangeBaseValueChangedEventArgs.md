import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# RangeBaseValueChangedEventArgs Class


Provides data specific to a <a href="E_Avalonia_Controls_Primitives_RangeBase_ValueChanged">ValueChanged</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class RangeBaseValueChangedEventArgs : RoutedEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class RangeBaseValueChangedEventArgs
	Inherits RoutedEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type RangeBaseValueChangedEventArgs = 
    class
        inherit RoutedEventArgs
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  RoutedEventArgs  →  RangeBaseValueChangedEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_RangeBaseValueChangedEventArgs__ctor_1">RangeBaseValueChangedEventArgs(Double, Double, RoutedEvent)</a></td>
<td>Initializes a new instance of the RangeBaseValueChangedEventArgs class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_RangeBaseValueChangedEventArgs__ctor">RangeBaseValueChangedEventArgs(Double, Double, RoutedEvent, Object)</a></td>
<td>Initializes a new instance of the RangeBaseValueChangedEventArgs class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>Handled</td>
<td><br />(Inherited from RoutedEventArgs)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_RangeBaseValueChangedEventArgs_NewValue">NewValue</a></td>
<td>Gets the new value of the range value property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_RangeBaseValueChangedEventArgs_OldValue">OldValue</a></td>
<td>Gets the old value of the range value property.</td>
</tr>
<tr>
<td>Route</td>
<td><br />(Inherited from RoutedEventArgs)</td>
</tr>
<tr>
<td>RoutedEvent</td>
<td><br />(Inherited from RoutedEventArgs)</td>
</tr>
<tr>
<td>Source</td>
<td><br />(Inherited from RoutedEventArgs)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
