---
title:PointerPressedEventArgs Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# PointerPressedEventArgs Class




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public class PointerPressedEventArgs : PointerEventArgs
```
**VB**
``` VB
Public Class PointerPressedEventArgs
	Inherits PointerEventArgs
```
**F#**
``` F#
type PointerPressedEventArgs = 
    class
        inherit PointerEventArgs
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>  →  <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a>  →  PointerPressedEventArgs</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_PointerPressedEventArgs__ctor">PointerPressedEventArgs(Object, IPointer, Visual, Point, UInt64, PointerPointProperties, KeyModifiers, Int32)</a></td>
<td>Initializes a new instance of the PointerPressedEventArgs class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_PointerPressedEventArgs_ClickCount">ClickCount</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_Handled">Handled</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_PointerEventArgs_KeyModifiers">KeyModifiers</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_PointerEventArgs_Pointer">Pointer</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_PointerEventArgs_Properties">Properties</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_Route">Route</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_RoutedEvent">RoutedEvent</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEventArgs_Source">Source</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_PointerEventArgs_Timestamp">Timestamp</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_PointerEventArgs_GetCurrentPoint">GetCurrentPoint(Visual)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_PointerEventArgs_GetIntermediatePoints">GetIntermediatePoints(Visual)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_PointerEventArgs_GetPosition">GetPosition(Visual)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_PointerEventArgs_PreventGestureRecognition">PreventGestureRecognition()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
