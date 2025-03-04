import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TrayIcon Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class TrayIcon : AvaloniaObject, INativeMenuExporterProvider, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class TrayIcon
	Inherits AvaloniaObject
	Implements INativeMenuExporterProvider, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type TrayIcon = 
    class
        inherit AvaloniaObject
        interface INativeMenuExporterProvider
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/TrayIcon.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  TrayIcon</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Platform_INativeMenuExporterProvider">INativeMenuExporterProvider</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_TrayIcon__ctor">TrayIcon()</a></td>
<td>Initializes a new instance of the TrayIcon class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_TrayIcon_Command">Command</a></td>
<td>Gets or sets the <a href="P_Avalonia_Controls_TrayIcon_Command">Command</a> property of a TrayIcon.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TrayIcon_CommandParameter">CommandParameter</a></td>
<td>Gets or sets the parameter to pass to the <a href="P_Avalonia_Controls_TrayIcon_Command">Command</a> property of a TrayIcon.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TrayIcon_Icon">Icon</a></td>
<td>Gets or sets the icon of the TrayIcon.</td>
</tr>
<tr>
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TrayIcon_IsVisible">IsVisible</a></td>
<td>Gets or sets the visibility of the TrayIcon.</td>
</tr>
<tr>
<td>Item</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Item</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TrayIcon_Menu">Menu</a></td>
<td>Gets or sets the Menu of the TrayIcon.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TrayIcon_NativeMenuExporter">NativeMenuExporter</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TrayIcon_ToolTipText">ToolTipText</a></td>
<td>Gets or sets the tooltip text of the TrayIcon.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td>Bind(AvaloniaProperty, IBinding)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind(AvaloniaProperty, IObservable(Object), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(BindingValue(UMP)))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(Object))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(UMP), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(BindingValue(UMP)), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(Object), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>CheckAccess()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(AvaloniaProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(DirectPropertyBase(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>CoerceValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TrayIcon_Dispose">Dispose()</a></td>
<td>Disposes the tray icon (removing it from the tray area).</td>
</tr>
<tr>
<td>Equals(Object)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>GetBaseValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetHashCode()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TrayIcon_GetIcons">GetIcons(Application)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>GetValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetValue``1(DirectPropertyBase(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsAnimating(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsSet(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TrayIcon_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Overrides AvaloniaObject.OnPropertyChanged(AvaloniaPropertyChangedEventArgs))</td>
</tr>
<tr>
<td>OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>RaisePropertyChanged``1(DirectPropertyBase(UMP), UMP, UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetAndRaise``1(DirectPropertyBase(UMP), UMP, UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetCurrentValue(AvaloniaProperty, Object)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetCurrentValue``1(StyledProperty(UMP), UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TrayIcon_SetIcons">SetIcons(Application, TrayIcons)</a></td>
<td> </td>
</tr>
<tr>
<td>SetValue(AvaloniaProperty, Object, BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue``1(DirectPropertyBase(UMP), UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue``1(StyledProperty(UMP), UMP, BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>VerifyAccess()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_TrayIcon_Clicked">Clicked</a></td>
<td>Raised when the TrayIcon is clicked. Note, this is only supported on Win32 and some Linux DEs, on OSX this event is not raised.</td>
</tr>
<tr>
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_TrayIcon_CommandParameterProperty">CommandParameterProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TrayIcon_CommandParameter">CommandParameter</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TrayIcon_CommandProperty">CommandProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TrayIcon_Command">Command</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TrayIcon_IconProperty">IconProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TrayIcon_Icon">Icon</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TrayIcon_IconsProperty">IconsProperty</a></td>
<td>Defines the <a href="T_Avalonia_Controls_TrayIcons">TrayIcons</a> attached property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TrayIcon_IsVisibleProperty">IsVisibleProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TrayIcon_IsVisible">IsVisible</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TrayIcon_MenuProperty">MenuProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TrayIcon_Menu">Menu</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TrayIcon_ToolTipTextProperty">ToolTipTextProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TrayIcon_ToolTipText">ToolTipText</a> property.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
