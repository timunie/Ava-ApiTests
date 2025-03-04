import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Flyout Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Flyout : PopupFlyoutBase
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Flyout
	Inherits PopupFlyoutBase
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Flyout = 
    class
        inherit PopupFlyoutBase
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Flyouts/Flyout.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  <a href="T_Avalonia_Controls_Primitives_FlyoutBase">FlyoutBase</a>  →  <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>  →  Flyout</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Flyout__ctor">Flyout()</a></td>
<td>Initializes a new instance of the Flyout class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Flyout_Content">Content</a></td>
<td>Gets or sets the content to display in this flyout</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_CustomPopupPlacementCallback">CustomPopupPlacementCallback</a></td>
<td>Gets or sets a delegate handler method that positions the Popup control, when <a href="P_Avalonia_Controls_Primitives_Popup_Placement">Placement</a> is set to <a href="T_Avalonia_Controls_PlacementMode">Custom</a>.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Flyout_FlyoutPresenterClasses">FlyoutPresenterClasses</a></td>
<td>Gets the Classes collection to apply to the FlyoutPresenter this Flyout is hosting</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Flyout_FlyoutPresenterTheme">FlyoutPresenterTheme</a></td>
<td>Gets or sets the ControlTheme that is applied to the container element generated for the flyout presenter.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_HorizontalOffset">HorizontalOffset</a></td>
<td>Gets or sets the Horizontal offset of the popup in relation to the <a href="P_Avalonia_Controls_Primitives_Popup_PlacementTarget">PlacementTarget</a>.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_FlyoutBase_IsOpen">IsOpen</a></td>
<td>Gets whether this Flyout is currently Open<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_FlyoutBase">FlyoutBase</a>)</td>
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
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_OverlayDismissEventPassThrough">OverlayDismissEventPassThrough</a></td>
<td>Gets or sets a value indicating whether the event that closes the flyout is passed through to the parent window.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_OverlayInputPassThroughElement">OverlayInputPassThroughElement</a></td>
<td>Gets or sets an element that should receive pointer input events even when underneath the flyout's overlay.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_Placement">Placement</a></td>
<td>Gets or sets the desired placement of the popup in relation to the <a href="P_Avalonia_Controls_Primitives_Popup_PlacementTarget">PlacementTarget</a>.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_PlacementAnchor">PlacementAnchor</a></td>
<td>Gets or sets the anchor point on the <a href="P_Avalonia_Controls_Primitives_Popup_PlacementRect">PlacementRect</a> when <a href="P_Avalonia_Controls_Primitives_Popup_Placement">Placement</a> is <a href="T_Avalonia_Controls_PlacementMode">AnchorAndGravity</a>.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_PlacementConstraintAdjustment">PlacementConstraintAdjustment</a></td>
<td>Gets or sets a value describing how the popup position will be adjusted if the unadjusted position would result in the popup being partly constrained.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_PlacementGravity">PlacementGravity</a></td>
<td>Gets or sets a value which defines in what direction the popup should open when <a href="P_Avalonia_Controls_Primitives_Popup_Placement">Placement</a> is <a href="T_Avalonia_Controls_PlacementMode">AnchorAndGravity</a>.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_Popup">Popup</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_ShowMode">ShowMode</a></td>
<td>Gets or sets the desired ShowMode<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_FlyoutBase_Target">Target</a></td>
<td>Gets the Target used for showing the Flyout<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_FlyoutBase">FlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupFlyoutBase_VerticalOffset">VerticalOffset</a></td>
<td>Gets or sets the Vertical offset of the popup in relation to the <a href="P_Avalonia_Controls_Primitives_Popup_PlacementTarget">PlacementTarget</a>.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
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
<td><a href="M_Avalonia_Controls_Flyout_CreatePresenter">CreatePresenter()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Primitives_PopupFlyoutBase_CreatePresenter">PopupFlyoutBase.CreatePresenter()</a>)</td>
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
<td><a href="M_Avalonia_Controls_Primitives_PopupFlyoutBase_Hide">Hide()</a></td>
<td>Hides the Flyout<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupFlyoutBase_HideCore">HideCore(Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
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
<td><a href="M_Avalonia_Controls_Primitives_FlyoutBase_OnClosed">OnClosed()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_FlyoutBase">FlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupFlyoutBase_OnClosing">OnClosing(CancelEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_FlyoutBase_OnOpened">OnOpened()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_FlyoutBase">FlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Flyout_OnOpening">OnOpening(CancelEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Primitives_PopupFlyoutBase_OnOpening">PopupFlyoutBase.OnOpening(CancelEventArgs)</a>)</td>
</tr>
<tr>
<td>OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</td>
<td><br />(Inherited from AvaloniaObject)</td>
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
<td><a href="M_Avalonia_Controls_Primitives_PopupFlyoutBase_ShowAt_1">ShowAt(Control)</a></td>
<td>Shows the Flyout at the given Control<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupFlyoutBase_ShowAt">ShowAt(Control, Boolean)</a></td>
<td>Shows the Flyout for the given control at the current pointer location, as in a ContextFlyout<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupFlyoutBase_ShowAtCore">ShowAtCore(Control, Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
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
<td><a href="E_Avalonia_Controls_Primitives_FlyoutBase_Closed">Closed</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_FlyoutBase">FlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_PopupFlyoutBase_Closing">Closing</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_FlyoutBase_Opened">Opened</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_FlyoutBase">FlyoutBase</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_PopupFlyoutBase_Opening">Opening</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase</a>)</td>
</tr>
<tr>
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_Flyout_ContentProperty">ContentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Flyout_Content">Content</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Flyout_FlyoutPresenterThemeProperty">FlyoutPresenterThemeProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Flyout_FlyoutPresenterTheme">FlyoutPresenterTheme</a> property.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
