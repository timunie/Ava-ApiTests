# SelectingItemsControlAutomationPeer Class




## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class SelectingItemsControlAutomationPeer : ItemsControlAutomationPeer, 
	ISelectionProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class SelectingItemsControlAutomationPeer
	Inherits ItemsControlAutomationPeer
	Implements ISelectionProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type SelectingItemsControlAutomationPeer = 
    class
        inherit ItemsControlAutomationPeer
        interface ISelectionProvider
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Peers/SelectingItemsControlAutomationPeer.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>  →  <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>  →  <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>  →  SelectingItemsControlAutomationPeer</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Automation_Peers_ComboBoxAutomationPeer">Avalonia.Automation.Peers.ComboBoxAutomationPeer</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Automation_Provider_ISelectionProvider">ISelectionProvider</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer__ctor">SelectingItemsControlAutomationPeer(SelectingItemsControl)</a></td>
<td>Initializes a new instance of the SelectingItemsControlAutomationPeer class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer_CanSelectMultiple">CanSelectMultiple</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Peers_ItemsControlAutomationPeer_HorizontallyScrollable">HorizontallyScrollable</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Peers_ItemsControlAutomationPeer_HorizontalScrollPercent">HorizontalScrollPercent</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Peers_ItemsControlAutomationPeer_HorizontalViewSize">HorizontalViewSize</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer_IsSelectionRequired">IsSelectionRequired</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Peers_ItemsControlAutomationPeer_Owner">Owner</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Peers_ItemsControlAutomationPeer_Scroller">Scroller</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Peers_ItemsControlAutomationPeer_VerticallyScrollable">VerticallyScrollable</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Peers_ItemsControlAutomationPeer_VerticalScrollPercent">VerticalScrollPercent</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Peers_ItemsControlAutomationPeer_VerticalViewSize">VerticalViewSize</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_BringIntoView">BringIntoView()</a></td>
<td>Attempts to bring the element associated with the automation peer into view.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_BringIntoViewCore">BringIntoViewCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_EnsureEnabled">EnsureEnabled()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
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
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetAcceleratorKey">GetAcceleratorKey()</a></td>
<td>Gets the accelerator key combinations for the element that is associated with the UI Automation peer.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetAcceleratorKeyCore">GetAcceleratorKeyCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetAccessKey">GetAccessKey()</a></td>
<td>Gets the access key for the element that is associated with the automation peer.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetAccessKeyCore">GetAccessKeyCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetAutomationControlType">GetAutomationControlType()</a></td>
<td>Gets the control type for the element that is associated with the UI Automation peer.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ItemsControlAutomationPeer_GetAutomationControlTypeCore">GetAutomationControlTypeCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetAutomationId">GetAutomationId()</a></td>
<td>Gets the automation ID of the element that is associated with the UI Automation peer.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetAutomationIdCore">GetAutomationIdCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetBoundingRectangle">GetBoundingRectangle()</a></td>
<td>Gets the bounding rectangle of the element that is associated with the automation peer in top-level coordinates.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetBoundingRectangleCore">GetBoundingRectangleCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetChildren">GetChildren()</a></td>
<td>Gets the child automation peers.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetChildrenCore">GetChildrenCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetClassName">GetClassName()</a></td>
<td>Gets a string that describes the class of the element.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetClassNameCore">GetClassNameCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetControlTypeOverrideCore">GetControlTypeOverrideCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetHelpText">GetHelpText()</a></td>
<td>Gets text that provides help for the element that is associated with this automation peer.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetHelpTextCore">GetHelpTextCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetLabeledBy">GetLabeledBy()</a></td>
<td>Gets the automation peer for the label that is targeted to the element.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetLabeledByCore">GetLabeledByCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetLocalizedControlType">GetLocalizedControlType()</a></td>
<td>Gets a human-readable localized string that represents the type of the control that is associated with this automation peer.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetLocalizedControlTypeCore">GetLocalizedControlTypeCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetName">GetName()</a></td>
<td>Gets text that describes the element that is associated with this automation peer.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetNameCore">GetNameCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetOrCreate">GetOrCreate(Control)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetOrCreateChildrenCore">GetOrCreateChildrenCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetParent">GetParent()</a></td>
<td>Gets the <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> that is the parent of this <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetParentCore">GetParentCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetProvider__1">GetProvider(T)()</a></td>
<td>Tries to get a provider of the specified type from the peer.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetProviderCore">GetProviderCore(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer_GetSelection">GetSelection()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer_GetSelectionCore">GetSelectionCore()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer_GetSelectionModeCore">GetSelectionModeCore()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_GetVisualRoot">GetVisualRoot()</a></td>
<td>Gets the <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> that is the root of this <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>'s visual tree.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetVisualRootCore">GetVisualRootCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_HasKeyboardFocus">HasKeyboardFocus()</a></td>
<td>Gets a value that indicates whether the element that is associated with this automation peer currently has keyboard focus.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_HasKeyboardFocusCore">HasKeyboardFocusCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_InvalidateChildren">InvalidateChildren()</a></td>
<td>Invalidates the peer's children and causes a re-read from <a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_GetChildrenCore">GetChildrenCore()</a>.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_InvalidateParent">InvalidateParent()</a></td>
<td>Invalidates the peer's parent.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_IsContentElement">IsContentElement()</a></td>
<td>Gets a value that indicates whether the element that is associated with this automation peer contains data that is presented to the user.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_IsContentElementCore">IsContentElementCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_IsContentElementOverrideCore">IsContentElementOverrideCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_IsControlElement">IsControlElement()</a></td>
<td>Gets a value that indicates whether the element is understood by the user as interactive or as contributing to the logical structure of the control in the GUI.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_IsControlElementCore">IsControlElementCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_IsControlElementOverrideCore">IsControlElementOverrideCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_IsEnabled">IsEnabled()</a></td>
<td>Gets a value indicating whether the control is enabled for user interaction.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_IsEnabledCore">IsEnabledCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_IsKeyboardFocusable">IsKeyboardFocusable()</a></td>
<td>Gets a value that indicates whether the element can accept keyboard focus.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_IsKeyboardFocusableCore">IsKeyboardFocusableCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_IsOffscreen">IsOffscreen()</a></td>
<td>Gets a value that indicates whether an element is off the screen.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_IsOffscreenCore">IsOffscreenCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer_OwnerPropertyChanged">OwnerPropertyChanged(Object, AvaloniaPropertyChangedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer_OwnerSelectionChanged">OwnerSelectionChanged(Object, SelectionModelSelectionChangedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_RaiseChildrenChangedEvent">RaiseChildrenChangedEvent()</a></td>
<td>Raises an event to notify the automation client the children of the peer have changed.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_RaisePropertyChangedEvent">RaisePropertyChangedEvent(AutomationProperty, Object, Object)</a></td>
<td>Raises an event to notify the automation client of a changed property value.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ItemsControlAutomationPeer_Scroll">Scroll(ScrollAmount, ScrollAmount)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_SetFocus">SetFocus()</a></td>
<td>Sets the keyboard focus on the element that is associated with this automation peer.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_SetFocusCore">SetFocusCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ItemsControlAutomationPeer_SetScrollPercent">SetScrollPercent(Double, Double)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ItemsControlAutomationPeer">ItemsControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_AutomationPeer_ShowContextMenu">ShowContextMenu()</a></td>
<td>Shows the context menu for the element that is associated with this automation peer.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_ShowContextMenuCore">ShowContextMenuCore()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_TrySetParent">TrySetParent(AutomationPeer)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Automation_Peers_AutomationPeer_ChildrenChanged">ChildrenChanged</a></td>
<td>Occurs when the children of the automation peer have changed.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Automation_Peers_AutomationPeer_PropertyChanged">PropertyChanged</a></td>
<td>Occurs when a property value of the automation peer has changed.<br />(Inherited from <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  

